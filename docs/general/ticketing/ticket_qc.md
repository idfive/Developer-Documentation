# Ticketing QC

## General

In general, the QC process for bug tickets varies depending on:

- Client
- Scope
- Functionality

We do not, unless specifically requested, do full QC's for bug tickets. The level of QC performed will be up to the developer performing the fix, and will be limited in scope to the issue outlined in the ticket, unless a more robust set of acceptance criteria is specifically requested. More robust feature requests should be treated more as a "launch" as opposed to a ticket, and the QC process should reflect that.

## Front end checklist

In general, tickets for frontend should check functionality in:

- Current version of Chrome, Safari, Firefox, and Edge browsers.
- Any mobile specific functionality tested on actual device, or emulator.
- Run through WAVE tool, if appropriate.
- Run through w3c validator, if appropriate.

## Back end checklist

Backend (server side) functionality should be tested to ensure:

- All requirements layed out in ticket are met.
- As much as possible, all scenarios thought through and accounted for.
- Coding standards for CMS platform accounted for.
