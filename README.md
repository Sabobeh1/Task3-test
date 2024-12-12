# Dynamic User Dashboard (Angular)

This project is an interactive, paginated user dashboard built using Angular and TypeScript. It fetches user data and details from the [ReqRes](https://reqres.in/) API and provides features such as instant search, LocalStorage-based caching, and navigable profile detail pages. Users can seamlessly browse, search, and view detailed information for each user while benefiting from responsive UI layouts, loading indicators, and proper error handling.

## Features
- **User Listing & Pagination:** Fetches paginated user data from `https://reqres.in/api/users?page={page}` and displays a horizontally centered list of user cards.
- **User Detail View:** On selecting a user, navigate to a details page fetched from `https://reqres.in/api/users/{id}`.
- **Instant Search:** Search by user ID from the header’s input field without needing a separate search button.
- **Caching & Performance:** Uses LocalStorage to cache user data and reduce redundant HTTP requests.
- **Loading & Error Handling:** Shows a loading indicator during data retrieval and gracefully handles errors.
- **Responsive Design:** The UI adapts to various device sizes and screen orientations.
- **Angular Best Practices:** Leverages Angular components, modules, services, and routing for a scalable, maintainable codebase.

## Technologies Used
- **Angular & TypeScript** for component-based architecture and type safety
- **Angular Routing** for navigating between dashboard and detail views
- **Angular Services** for data fetching, caching, and logic abstraction
- **HTTPClient & RESTful APIs** to consume [ReqRes](https://reqres.in/) endpoints
- **LocalStorage** for caching user data and reducing redundant network requests
- **CSS** for responsive UI styling


