# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

**Ticket1**
Title:
As a BE developer, I want to modify agents table to store unique custom id for facilities to make reports more readable.

Details:
Add a new column customId in Agent table. Create an endpoint & provide to FE developer which can be integrated on the UI. This endpoint will accept a customId from UI & feed that customId into that agent's custom Id. If the customId already exists then it should return an error.

Time/Effort estimates: ~3hours

DoD (Definition of Done):

1. On hitting endpoint with valid customId, a new id is added in the agent table for that agent.
2. On hitting endpoint with inValid customId, it should give error.
3. On hitting endpoint with duplicate customId, it should give error.

**Ticket2**
Title:
As a BE developer, I want to consume customId created in getShiftsByFacility to make reports more readable.

Details:
Modify getShiftsByFacility to return customId for agent in the metadata. Should return null if customId does not exist.

Time/Effort estimates: ~2hours

DoD (Definition of Done):

1. On hitting endpoint, the returned response should include customId for each agent (if exist else retunr null).

**Ticket3**
Title:
As a developer, I want to modify report generation function to include customId instead of DB id for agents to make reports more readable.

Details:
Modify generateReport to generate report having customId for agent also the DB id should be replaced.
If customId is not found then use DB id in the report (for this logic I need confirmation from PM to do id replacement or not)

Time/Effort estimates: ~2hours

DoD (Definition of Done):

1. On hitting endpoint, the generated report should include customId for each agent

**I don't know if there's any code on frontend that needs to be changed, if it exists we need to create a ticket for FE developer also**

**Improvement for future: [Future tickets]**

1. Whenever a agent leaves a facitlity make this customId as null so that new facility can enter new ID.
2. Modifiy facility onboarding API so that they can create custom agent id at the beginning.
