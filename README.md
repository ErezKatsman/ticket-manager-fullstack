# ![Scale-Up Velocity](./readme-files/logo-main.png) Final 2/5 - Ticket Manager

### Ticket manager
In this project, I built a Ticket Manager Web Application, with the [MERN stack](https://www.educative.io/edpresso/what-is-mern-stack).
This task is said to be an assignment given for Wix job interviews.


## backend
The Express app is located in app.js and exports the app object.
I made 1 route api/tickets that has 3 requests:
- [GET] `api/tickets` - returns an array of all tickets in the collection `tickets` in mongoDB atlas database. If called with [query param](https://en.wikipedia.org/wiki/Query_string) `searchText` the API will filter only tickets that have a title including a [case-insensitive](https://en.wikipedia.org/wiki/Case_sensitivity) version of the `searchText` param
  - [PATCH] `api/tickets/[:ticketId]`(https://stackoverflow.com/a/20089634/10839175)/done - Sets `done` property to `true` for the given ticketId - should return `{updated: true}` if succeed
  - [PATCH] `api/tickets/[:ticketId]`(https://stackoverflow.com/a/20089634/10839175)/undone - Sets `done` property to `false` for the given ticketId - should return `{updated: true}` if succeed
