# VaHire - IT Professionals Marketplace

VaHire is a modern platform connecting IT professionals with businesses. This project uses Next.js 15 with a full suite of modern tools and libraries.

## Features

- Authentication with Auth0
- Project listing and management
- Messaging system
- Payment processing with Stripe
- Review system
- Course platform
- Multi-language support (English and French)
- Dark/Light theme support

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with TypeScript
- **State Management**:
  - [TanStack Query](https://tanstack.com/query) - Server state
  - [TanStack Table](https://tanstack.com/table) - Table data management
  - [Zustand](https://github.com/pmndrs/zustand) - Client state
- **Styling**: Tailwind CSS for utility-based styling
- **UI Components**: 
  - [shadcn/ui](https://ui.shadcn.com/)
  - [Origin UI](https://originui.com/)
  - [React Icons](https://react-icons.github.io/react-icons/icons?name=pi)
- **Forms**: React Hook Form with Yup validation
- **Authentication**: Auth0
- **Real-time**: Socket.io for chat functionality
- **URL State**: [Nuqs](https://nuqs.47ng.com/)
- **File Uploads**: Cloudinary integration

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/va-hire-frontend.git
   cd va-hire-frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   # Auth0
   AUTH0_SECRET=your_auth0_secret
   AUTH0_BASE_URL=http://localhost:3000
   AUTH0_ISSUER_BASE_URL=https://your-domain.auth0.com
   AUTH0_CLIENT_ID=your_auth0_client_id
   AUTH0_CLIENT_SECRET=your_auth0_client_secret
   
   # API
   NEXT_PUBLIC_API_URL=http://localhost:8000
   
   # Cloudinary
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
   
   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

- `src/app/`: App router pages and layouts
- `src/app/(routes)/`: Organized route groups 
- `src/components/`: React components
  - `ui/`: UI components (buttons, cards, etc.)
  - `shared/`: Shared components (navbar, footer, etc.)
  - `auth/`: Authentication-related components
  - `dashboard/`: Dashboard-related components
  - `projects/`: Project-related components
  - `messages/`: Messaging-related components
- `src/lib/`: Utility functions and helpers
- `src/hooks/`: Custom React hooks
- `src/store/`: Zustand state management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the awesome framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Auth0](https://auth0.com/) for authentication
