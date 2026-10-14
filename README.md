# Print Cost Desk — free 3D print cost calculator

A small browser preview for estimating a one-item 3D print quote from material,
machine wear, labor and target margin. Original code/content created with AI
assistance. No accounts, subscription, paid API key or network request is needed
for the local calculation.

[Try the live free calculator](https://print-cost-desk-crypto.blackup223.chatgpt.site/demo?utm_source=github&utm_medium=repository&utm_campaign=launch)
· [Read the pricing guides](https://print-cost-desk-crypto.blackup223.chatgpt.site/guides?utm_source=github)

## Run locally

Download this repository, keep index.html and demo-engine.js together, and open
index.html in a browser. The calculator runs locally; guide/store links lead to
the public site. No build or package installation is required.

The price uses included cost / (1 - target margin) and rounds up to the next cent.
A cost of 10 with a 20% margin gives 12.50. Adding a 20% markup gives 12.00 instead,
which has about a 16.7% margin. Examples are illustrative, not industry averages.

## Preview scope

The free UI estimates material, machine wear and labor for one item. It omits
electricity, failures, packaging, shipping, taxes and selling fees, and it does
not save quotes or convert currencies. Use one currency consistently.

## Commercial companion

Disclosure: this repository is published by the maker of Print Cost Desk and
links to its paid product. The optional **$19 one-time offline kit** includes
additional cost inputs, saved quote snapshots/statuses, CSV export/JSON backups,
blank/example XLSX workbooks and customer instructions. The store accepts BTC,
native ETH and XMR on their mainnets. No sales or profit guarantee.

[See the full kit](https://print-cost-desk-crypto.blackup223.chatgpt.site/?utm_source=github&utm_medium=repository&utm_campaign=launch#buy)

This free repository is 0BSD licensed. That does not grant permission to
redistribute the separately licensed paid kit/workbooks. Chromium was tested;
other browsers and Excel desktop rendering remain unverified. No lifetime
support/update commitment. Purchase issues belong to your private invoice link;
do not post wallet secrets, payment access tokens or customer records in issues.
