# How to
- Create `configs/crm-config.json` file with the following content.

```
{
  "url": "your_local_url",
  "credentials": {
    "name": "local_username",
    "pass": "local_password"
  }
}
```

- Run a specific config file (all scenarios must be under scenarios folder)
`node test-runner.js --task=reference --configPath=./search-actions.json`

`node test-runner.js --task=test --configPath=./search-actions.json`


# Covered pages

## Search menu
- [x] Find Contacts
- [x] Advanced search
- [x] Standard search results
- [x] Advanced search results
- [x] Full-text Search
- [x] Full-text Search results
- [x] Search Builder
- [x] Find Contributions
- [x] Find Mailings
- [x] Find Membership
- [x] Find Participants
- [x] Find Participants results
- [x] Find Pledges
- [x] Find Activities
- [x] Custom Searches


## Contacts menu
- [x] New Individual
- [x] New Household
- [x] New Organization
- [x] Contact Reports
- [x] New Activity
- [x] New Email
- [x] Import Contacts
- [ ] Import Activities
- [x] New Group
- [x] Manage Groups
- [x] New Tag
- [x] Manage Tags (Categories)
- [x] Find and Merge Duplicate Contacts


## Contributions menu
- [x] Dashboard
- [x] New Contribution
- [x] Find Contribution
- [x] Contribution Reports
- [x] Import Contributions
- [x] Pledges - Dashboard
- [x] Pledges - New Pledges
- [x] Pledges - Find Pledges
- [x] Pledges - Pledges Reports
- [x] Pledges - New Pledge Report
- [x] Batch Data Entry
- [x] New Batch Data Entry
- [x] Accouting Batch - New Batch
- [x] Accouting Batch - Open Batches
- [x] Accouting Batch - Closed Batches
- [x] Accouting Batch - Exported Batches
- [x] New Contribution Page
- [x] Manage Contribution Pages
- [x] Personal Campaign Pages
- [x] Premiums (Thank-you Gifts)
- [x] New Price Set
- [x] Manage Price Set
- [x] Close Accounting Period


## Events menu
- [x] Dashboard
- [x] Register Event Participant
- [x] Find Participants
- [x] Event Reports
- [x] Import Participants
- [x] New Event
- [x] Manage Events


## Mailings menu
- [x] New Mailings
- [x] Draft and Unscheduled Mailings
- [x] Scheduled and Sent Mailings
- [x] Archived Mailings
- [x] Mailing Reports
- [x] Headers, Footers, and Automated Messages
- [x] Headers, Footers, and Automated Messages - Add Mailing Component
- [x] Message Templates
- [x] From Email Addresses
- [ ] New SMS
- [x] Find Mass SMS
- [x] New A/B Test
- [x] Manage A/B Tests


## Memberships menu
- [x] Dashboard
- [x] New Membership
- [x] Find Memberships
- [x] Membership Reports
- [x] Batch Data Entry
- [x] Import Memberships


## Administer menu

### Administration Console
  - [x] System Status
  - [x] Configuration Checklist

### Customize Data and Screens
  - [x] Custom Fields
  - [x] New Custom Field
  - [x] Profiles
    - [x] Name and Address - CiviCRM Profile Fields
  - [x] Tags
  - [x] Activity Types
  - [x] Relationship Types
  - [x] Contact Types
  - [x] Dropdown Options
    - [x] Gender Options
    - [x] Individual contact prefixes Options
    - [x] Individual contact suffixes Options
    - [x] Instant Messenger (IM) screen-names Options
    - [x] Location Types (Home, Work...)
    - [x] Mobile Phone Providers Options
    - [x] Phone Type Options
    - [x] Website Type Options
  - [x] Display Preferences
  - [x] Search Preferences
  - [x] Date Preferences
  - [x] Navigation Preferences
  - [x] World Replacements
  - [x] Manage Custom Searches

### Communications
  - [x] Organization Address and Contact Info
  - [x] Message Templates
  - [x] New Message Template
  - [x] Schedule Reminders
  - [x] Preferred Communication Methods
  - [x] Label Formats
  - [x] Print Page (PDF) Formats
  - [x] Communication Style Options
  - [x] Email Greeting Type Options
  - [x] Postal Greeting Type Options
  - [x] Addressee Type Options

### Localization
  - [x] Settings
  - [x] Addresses
  - [x] Date
  - [x] Languages Options

### Users and Permissions
  - [x] Access Control
  - [x] Synchronize Users to Contacts

### System Settings
  - [x] Enable Components
  - [x] Connections
  - [x] Extensions
  - [x] Cleanup Caches and Update Paths
  - [x] Debugging and Error Handling
  - [x] Upload Directories
  - [x] Import/Export Mappings
  - [x] Mapping and Geocoding Providers
  - [x] Misc
  - [x] Option Groups
  - [x] Payment Processor
  - [x] Resource URLs
  - [x] Safe File Extension Options
  - [x] Scheduled Jobs
  - [x] SMS Provider

### CiviReport
  - [x] All Reports
  - [x] Create New Report from Template
  - [x] Manage Templates
  - [x] Register Report

### CiviMember
  - [x] Membership Types
  - [x] Membership Status Rules
  - [x] Component Settings

### CiviCampaign
  - [ ] Survey Types
  - [ ] Campaign Types
  - [ ] Campaign Status
  - [ ] Engagement Index
  - [ ] CiviCampaign Component Settings

### CiviContribute
  - [x] Financial Types
  - [x] Financial Accounts
  - [x] Payment Methods Options
  - [x] Accepted Credit Cards Options
  - [x] Soft Credit Types Options
  - [x] Payment Processor
  - [x] Payment Processor

### CiviEvent
  - [x] Event Templates
  - [x] Event Type Options
  - [x] Participant Status
  - [x] Participant Role Options
  - [x] Participant Listing Options
  - [x] Event Name Badge Layouts
  - [x] New Event Name Badge Layout
  - [x] CiviEvent Component Settings

### CiviMail
  - [x] Mail Accounts
  - [x] CiviMail Settings
  - [x] CiviMail Component Settings
