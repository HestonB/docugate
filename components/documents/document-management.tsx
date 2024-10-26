'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SearchBar } from '@/components/common/search-bar';
import { DocumentList } from './document-list';

export function DocumentManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search documents..."
      />

      <DocumentList searchTerm={searchTerm} />
    </div>
  );
}