import React from "react";
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
  return (
    <React.Fragment>

    <generator.Form 
    method="post"
    className="flex-col [&>div]:mb-3"
    >
        <div className="flex flex-col">
          <label htmlFor="ssid">SSID</label>
          <input
            required
            type="text"
            name="ssid"
            id="ssid"
            className="py-2 px-3 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            required
            type="text"
            name="password"
            id="password"
            className="py-2 px-3 rounded"
            // disabled={securitySelected}
          />
        </div>
        <div>
          <input 
            type="checkbox"
            name="hidden"
            id="hidden"
          />
          <label htmlFor="hidden" className="pl-3">Hidden</label>
        </div>
        <fieldset 
          className="flex justify-between"
          // onChange={handleSecurityChange}
        >
          <legend>Security Level</legend>
          <div>
            <input type="radio" name="security" id="none" value="none"/>
            <label htmlFor="none" className="pl-3">None</label>
          </div>
          <div>
            <input defaultChecked type="radio" name="security" id="wpa" value="wpa"/>
            <label htmlFor="wpa" className="pl-3">WPA/WPA2</label>
          </div>
          <div>
            <input type="radio" name="security" id="wep" value="wep"/>
            <label htmlFor="wep" className="pl-3">WEP</label>
          </div>
        </fieldset>
        <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
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
    </React.Fragment>
  );
}