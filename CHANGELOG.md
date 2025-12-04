# Changelog
### [0.28.1] - 2025-11-17
### Fixed
- Admin Pane Responsive issue (Table was the problem ~ sol: changed the table for mobile and tab into cards)
### [0.27.0] - 2025-11-14
### Added 
- Admin Pane (Add user, add Admin Form, with table populated with dummy data)

### Known Issue
- Admin Pane responsiveness issue (Nothing shows up in the mobile section, and it looks out of proportion in the tab size)

### [0.26.1] - 2025-11-14
### Fixed
- Testimonial Responsive issue (removed "h-[400px] max-w-[700px]" in TestimonialCards Component line:86) 

### [0.26.0] - 2025-11-13
### Known Issues
- Testimonials not responsive

### [0.25.1] - 2025-11-12
### Fixed
- Admin dashboard responsive issue
- Metrics Pane responsive issue ~ (completly removed flex box and used grid instead)
- Charts Clip Off ~ (set the width of the ResponsiveContainer to "full")

## [0.25.0] - 2025-11-11
### Added
- REACT library for graphs (ReChart)
- GRAPH SET UP (Bar, Horizontal Bar, Pie, Line and Bubble) ~ for Metrics
- SKELETON SET UP (Bar, Horizontal Bar, Pie, Line and Bubble) ~ for Metrics

### Known Issues
- Charts clip off when zoom in
- Metrics pane is not responsive
- Admin Dashboard is not repsonsive


## [0.24.0] - 2025-11-10
### Added
- Panes folder, houses pane components
- Metrics Pane (For graphical Content e.g. graphs pie charts etc.)
- Admin Pane (For adding new admins, new users to dashbaord)
- Course Management (For adding and editing new courses)
- Assessment Management (For creating assessments based on courses)
- Event Management (For creating events)
- Resource Management (For uploading, or managing, or editing documents)
- My Account Component (for editing users account)
- Skeleton set up for admin dashboard

## [0.23.0] - 2025-11-05
### Added
- DashboardSidebar Component
- DashboardTitleBoard

## [0.22.0] - 2025-11-04
### Added
- logic to hide HamburgerNavItems
- reload with a fade style (More cleaner and modern approach)
## [0.21.0] - 2025 -11-03
### Added
- scroll to home section logic
- tailwind css to centralize hamburger component Items

## [0.20.1] - 2025-10-28
### Fixed
- Navbar item hover effect fixed (w-full casused issue)
- Non-responsive Admin ,and User Sign In Forms, as well as Contact Support form
- Carousel Card Responsive Issue
- Guide cards non-responsive (set base flex and direction)
- Admin and User WhatsApp Code Form non-responsive
- Admin and User Password Reset Form non-responsive
- contact support form non-responsive

## [0.20.0] - 2025-10-23
### Added
- Message Logic for the WhatsApp and Password Reset
- Admin Dashboard Page
- User Dashboard Page

## [0.19.0] - 2025-10-22
### Added
- OTP Logic file for reset password (utils folder)
- Message Component

## [0.18.0] - 2025-10-21
_Removed BreadCrumbs, because it's not needed, also added Password change request form_

### Removed
- Mobile BreadCrumb Component
- BreadCrumb Component

### Added
- Password change request form

## [0.17.0] - 2025-10-20
### Added
- Mobile Breadcrumb

### Known Issues
- Non-Responsive forms of Admin, Contact Staff and User

## [0.16.1] - 2025-10-20
### Fixed
- Icon Displayment (Changed the Icon path - created a file in "util" folder)
- BreadCrumb - mobile section issue (Created a mobileBreadcrumb Component)

## [0.16.0] - 2025-10-16
### Added
- WhatsApp Authentication option (For both Admin and User Section)

### Known Issues
- Icon does not display (whatsapp code request section) - for user/admin section
- Beadcrumb is not responsive
- mobile section of forget password, not responsive


## [0.15.1] - 2025-10-15
### Fixed
- Alignment Problem (Removed 'w-px')

## [0.15.0] - 2025-10-15
### Added
- USER Forget PWD Component


## [0.14.0] - 2025-10-14
### added
- Breadcrumb component
- User Page Component
- SignIn Form Component

### Known Issues
- Alignment Problem (Everything is left aligned, seems likw tailwind is not taking effect?) - AdminPage and  UserPage

## [0.13.0] - 2025-10-13
### Added
- Forgot password section to the AdminConsolePage

### Known Issues
- Device Responsiveness (Mobile and Tablet)
- Responsiveness of the Breadcrumb in the Forget password

## [0.12.0] - 2025-10-09
### Added
- AdminConsolePage to onClick event for landing page button (admin console)
- Navigation for pages (LandingPage, and AdminCosnolePage)
- Breadcrumbs for the AdminConsolePage

## [0.11.1] - 2025-10-07
_Minor patch improving the testimonial view (how many will be showed)._

### Fixed
- Testimonial Section non-responsive - (Changed slidePerView value)

## [0.11.0] - 2025-10-07
_Introduced the footer and mobile footer component._

### Added
- Footer Component to the landing page
- Mobile Footer Component to the landing page (triggered when user is on a mobile device)

### Known Issue
- Testimonial section is not responsive on mobile device size

## [0.10.0] - 2025-10-06
_About Us Component was not needed for this project._

### Removed
- About Us Component - Replaced with Guide Component

### Added
- Guide Component and the FAQs Component

## [0.9.1] - 2025-10-02
### Fixed
- Non-responsive About us Section

## [0.9.0] - 2025-10-02
### Added
- Testimonial section in the landing page

### Known Issues
- Course modal has sub par height (does not fit entire screen)
- Dead space at the testimonials (between the rating, feedback and user fullname)

## [0.8.0] - 2025-10-01
_Introduced about us and divider component._

### Added 
- About us section
- Divider component to the landing page

### Known Issue
- Non-responsive About us Section (Mobile device res)

## [0.7.2] - 2025-10-01
_Minor patch improving the mobile responsiveness for the courses._

### Fixed
- Mobile responsiveness for courses, and onClick for mobile works.

## [0.7.1] - 2025-09-30
### Fixed
- Non-responsiveness of the course modal

## [0.7.0] - 2025-09-30
### Improvement
- Hover effect is more smoother and responsive

### Known Issues
- Non-responsive Course Modal 
- Mobile resolutions courses does not function - onclick

## [0.6.1] - 2025-09-29
_Minor patch improving the vertical carousels movements, making it smoother._

### Improvement 
- Vertical carousel movemnets has been changed, added a smooth movement, by configuring the swiper speed.

## [0.6.0] - 2025-09-29
_Introduced the Course modal, and course card. Including highlight hover effect._

### Added
- Course modal, with highlight effect
- Course card to the course modal for each course

## [0.5.2] - 2025-09-26
_Minor patch improving the dead space in the hero section._

### Fixed
- Spacing in the hero section, no more dead space

## [0.5.1] - 2025-09-25
### Fixed
- Non-responsive Hamburger modal Items

## [0.5.0] - 2025-09-25
### Added 
- Hamburger Nav-Item modal

### Known Issue
- Hamburger Navbar items is not showing when toggled (mobile resolution)

## [0.4.1] - 2025-09-23
_Minor patch improving the responsiveness of navbar on smaller devices._

### Fixed
- Navbar responsiveness on smaller devices - created a hamburger bar component

## [0.4.0] - 2025-09-23
_Introduced Hamburger Navbar for Mobile Devices, and initiated hover effect for Hamburger Menu._

### Added 
- Hamburger Navbar for mobile devices
- Hover effect for the hamburger bar menu

## [0.3.1] - 2025-09-18
_Minor patch improving the responsiveness of the vertical carousel component._

### Fixed
- Responsive issue of vertical carousel component

## [0.3.0] - 2025-09-18
### Added
- Hero section in Landing page

### Known Issues
- nav-item (Guide) ~ style not taking effect
- Spacing in the hero section is sub-par
- Nav-bar responsiveness on smaller devices
- Responsive issue of vertical carousel component

## [0.2.0] - 2025-09-16
### Added
- Landing page and Navbar
