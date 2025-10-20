import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-6xl sm:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}