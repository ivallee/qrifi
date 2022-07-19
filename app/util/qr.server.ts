// WIFI:S:<SSID>;T:<WEP|WPA|blank>;P:<PASSWORD>;H:<true|false|blank>;;

export function generateWifiQRString({ ssid, password, security, hidden }) {
  return `WIFI:S:${ssid};T:${security ? security.toUpperCase() : ''};P:${password ? password : ''};H:${hidden ? 'true' : ''};;`;
}

// build string
// co