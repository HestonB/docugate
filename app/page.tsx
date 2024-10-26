import Link from 'next/link';
import { ArrowRight, Building2, FileText, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight text-neutral-900 mb-6">
            Your Business Documents,
            <span className="text-blue-600"> Organized</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8">
            Securely manage and share documents with your clients through a dedicated portal. 
            Streamline your business communications today.
          </p>
          <Link 
            href="/dashboard" 
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Client Management</h3>
            <p className="text-neutral-600">
              Organize your clients and their documents in one secure location.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Document Sharing</h3>
            <p className="text-neutral-600">
              Share and manage documents securely with role-based access control.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Team Collaboration</h3>
            <p className="text-neutral-600">
              Work together with your team to manage client relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}