# Ticketing QC

## General

In general, the QC process for bug tickets varies depending on:

- Client.
- Scope.
- Functionality being built or addressed.

We do not, unless specifically requested, do full QC's for bug tickets. The level of QC performed will be up to the developer performing the fix, and will be limited in scope to the issue outlined in the ticket, unless a more robust set of acceptance criteria is specifically requested. More robust feature requests should be treated more as a "launch" as opposed to a ticket, and the QC process (and scope/hours) should reflect that.

## Front end checklist

In general, tickets for frontend should check functionality in:

- Current version of Chrome, Safari, Firefox, and Edge browsers.
- Any mobile specific functionality tested on actual device, or an emulator.
- Run through WAVE tool, if appropriate.
- Run through w3c validator, if appropriate.

For larger features, consult the standard QC checklist, and adapt as needed.

## Back end checklist

Backend (server side) functionality should be tested to ensure:

- All requirements layed out in ticket are met.
- As much as possible, all scenarios thought through and accounted for.
- Coding standards for CMS platform accounted for.

For larger features, consult the standard QC checklist, and adapt as needed.

## Client specific requests

Most client needs or desires around specific checks or deployment process can be accounted for. It will be up to PM team to facilitate these needs to support/DEV team at the outset, if desired.

Specific desires can include, but not limited to:

- Adherence to a specific, client specified checklists.
- Custom (non-standard) browser frontend checks (ie/opera/etc).
- Specific deployment patterns/etc for testing or launch.
- Writing of automated tests/etc for ingestion via a CI.
