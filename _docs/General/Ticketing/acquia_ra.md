# Acquia RA Ticketing

In general, some clients on acquia require assistance with acquia's automated ticketing process. The RA ticketing on acquia only targets security updates, and will only be run automatically for contrib modules/core at current major version of that installed. If you need to update "non security policy" versions, or if you need to go up major versions, manual update is required.

## If client support ticketing controlled via Trello

- Forward RA email to particular Trello board email address that creates cards automatically.
- When ready, move card to "in progress"
- Go to acquia ticket and see the overview of the update, and what may need to be tested.
- Respond to Acquia RA ticket, with "Approved for tagging". This is because most of our clients are on multi-sites, and RA ENV does not accurately reflect that, so we need changes to go to stg before we can check.
- When acquia deploys to stg, check stg environment for errors related to changes made.
- If no errors, respond "Approve for production".
- Once acquia deploys, check production site, including clearing all caches.
- Change acquia ticket status to resolved.
- Move Trello ticket to complete column.

## If client support ticketing NOT controlled via Trello

- Forward RA email to idfive PM in charge of account.
- When added to DTL, go to acquia ticket and see the overview of the update, and what may need to be tested.
- Respond to Acquia RA ticket, with "Approved for tagging". This is because most of our clients are on multi-sites, and RA ENV does not accurately reflect that, so we need changes to go to stg before we can check.
- When acquia deploys to stg, check stg environment for errors related to changes made.
- If no errors, respond "Approve for production".
- Once acquia deploys, check production site, including clearing all caches.
- Change acquia ticket status to resolved.
- Alert idfive PM that update complete.
