# Offboarding

## "Soft" offboarding

When a project ends and no retainer or post-launch services are requested, the possibility of future work remains. When we "off-board" a client this way, we still retain the following information:

- CMS credentials
- hosting/SFTP credentials

### Cleanup steps

 - Deactivate any pipelines in Buddy to prevent accidental file writes to the client server

## Full offboarding

Sometimes a client may have to cut ties completely, e.g. they have chosen a different agency of record. When we do a full off-boarding, we should: 

- request deactivation of our CMS logins from the client
- confirm the revocation of hosting/SFTP credentials
- delete any stored credentials (passwords, secure notes) in our password manager
- deactivate all pipelines in buddy


## Re-boarding

Should a client decide to reactivate a project with us, we will have to go through an on-boarding process.

- We will need all relevant credentials to access their live site
- If we do not have a staging environment, or if they do not have one, we will have to set it up
- We should update any of our code with code from their live site
- Deployments and pipelines will need to be set up once more

Significant time can be spent on re-boarding; ensure that this time is included in scoping and budget.