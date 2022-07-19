import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const ssid = formData.get('ssid');
  const password = formData.get('password');
  const hidden = formData.get('hidden');
  const security = formData.get('security');

  // validate inputs
  // render a qr string

  return json({ message: "OK!" });
};

export default function GeneratorRoute() {
  const generator = useFetcher();
  return (
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
  );
}