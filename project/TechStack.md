# Technical Stack Details - Motlow Creek Baptist Church Website

## Database Architecture

### Neon PostgreSQL (Relational Data)

#### Members Table

- Personal information
- Family relationships
- Contact details
- Membership status
- Role assignments

#### Prayer Subscriptions

- Subscription preferences
- Contact methods (email/SMS)
- Subscription status

#### Forms and Submissions

- Event registrations
- Information update requests
- Generic form submissions

### MongoDB (Content)

#### Blog Posts Collection

- Author information
- Content
- Publication status
- Categories/Tags

#### Events Collection

- Event details
- Registration requirements
- Attendance tracking
- Related resources

#### Prayer Requests Collection

- Request details
- Privacy level
- Distribution status
- Related updates

#### Dynamic Content Collection

- Pastor's messages
- Prayer Director's messages
- Ministry updates

## Authentication & Authorization

### Kinde Auth Implementation

- Single Sign-On (SSO)
- Role-based access control
- Session management
- Security best practices

### User Roles

- Public (unauthenticated)
- Member
- Content Editor
- Ministry Leader
- Administrator
- Tech Team

## Form Processing

### react-hook-form + zod

- Form validation schemas
- Error handling
- Field transformations
- Submission processing

### next-safe-action

- Server action security
- CSRF protection
- Rate limiting
- Input validation

## Data Management

### TanStack Query

- Data fetching
- Cache management
- Optimistic updates
- Real-time synchronization

## UI Components

### shadcn/ui + TailwindCSS

- Responsive design
- Accessibility compliance
- Theme customization
- Component composition

## Error Handling

### Sentry Integration

- Error tracking
- Performance monitoring
- User feedback
- Issue prioritization
