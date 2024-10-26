'use client';

import { useState } from 'react';
import { DocumentList } from '@/components/documents/document-list';
import { PageHeader } from '@/components/common/page-header';
import { SearchBar } from '@/components/common/search-bar';

export default function ClientDashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title="My Documents" 
          description="View and download your documents"
        />
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search documents..."
        />

        <DocumentList searchTerm={searchTerm} />
      </div>
    </div>
  );
}