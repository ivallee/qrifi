import React, { useState } from "react";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import QRCode from "~/components/QRCode";
import { generateWifiQRString } from "~/util/qr.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const ssid = formData.get('ssid');
  const password = formData.get('password');
  const hidden = formData.get('hidden');
  const security = formData.get('security');

  const QRString = generateWifiQRString({
    ssid,
    password,
    hidden,
    security
  });

  // validate inputs
  // render a qr string

  return json({ QRString });
};

export default function GeneratorRoute() {
  const generator = useFetcher();
  const [securitySelected, setSecuritySelected] = useState(false);

  function handleSecurityChange({ target }: React.SyntheticEvent) {
    if (target.value === 'none') {
      setSecuritySelected(true);
    } else {
      setSecuritySelected(false);
    }
  }
  return (
    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10 border-t-8 border-violet-700 ">
      <generator.Form 
        method="post"
        className="mb-0 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="ssid">SSID</label>
            <div className="mt-1">
              <input
                required
                type="text"
                name="ssid"
                id="ssid"
                className=""
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <div className="mt-1">
              <input
                type="password"
                name="password"
                id="password"
                className=""
                disabled={securitySelected}
              />
            </div>
          </div>
          <fieldset 
            className="flex justify-between"
            onChange={handleSecurityChange}
          >
            <legend className="block text-sm font-medium text-gray-700 mb-1">Security Level</legend>
            <div>
              <input type="radio" name="security" id="none" value="none"/>
              <label htmlFor="none" className="pl-2 text-sm font-medium text-gray-700">None</label>
            </div>
            <div>
              <input defaultChecked type="radio" name="security" id="wpa" value="wpa"/>
              <label htmlFor="wpa" className="pl-2 text-sm font-medium text-gray-700">WPA/WPA2</label>
            </div>
            <div>
              <input type="radio" name="security" id="wep" value="wep"/>
              <label htmlFor="wep" className="pl-2 text-sm font-medium text-gray-700">WEP</label>
            </div>
          </fieldset>
          <div>
            <input 
              type="checkbox"
              name="hidden"
              id="hidden"
            />
            <label className="text-sm font-medium text-gray-700 pl-2" htmlFor="hidden">Hidden Network</label>
          </div>
          <button 
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
          {generator.state !== 'idle'
            ? 'Generating.....'
            : 'Generate!'
          }
          </button>
        </generator.Form>
      {generator.data?.QRString &&
        <QRCode QRString={generator.data.QRString}/>
      }
    </div>
  );
}