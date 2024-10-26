'use client';

import { FileText, Download, Share2, MoreVertical } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data - replace with API call
const documents = [
  { id: 1, name: 'Q4 Financial Report.pdf', date: '2024-03-15', type: 'Financial' },
  { id: 2, name: 'Service Agreement.docx', date: '2024-03-14', type: 'Legal' },
  { id: 3, name: 'Project Proposal.pdf', date: '2024-03-13', type: 'Proposal' },
  { id: 4, name: 'Tax Documents 2023.pdf', date: '2024-03-12', type: 'Tax' },
  { id: 5, name: 'Meeting Minutes.docx', date: '2024-03-11', type: 'Internal' },
];

interface DocumentListProps {
  searchTerm: string;
}

export function DocumentList({ searchTerm }: DocumentListProps) {
  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="grid grid-cols-12 gap-4 p-4 border-b text-sm font-medium text-neutral-500">
        <div className="col-span-6">Document</div>
        <div className="col-span-2">Type</div>
        <div className="col-span-2">Date</div>
        <div className="col-span-2">Actions</div>
      </div>

      {filteredDocuments.map((doc) => (
        <div key={doc.id} className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center hover:bg-neutral-50">
          <div className="col-span-6 flex items-center">
            <FileText className="h-5 w-5 text-blue-600 mr-3" />
            <span className="font-medium text-neutral-900">{doc.name}</span>
          </div>
          <div className="col-span-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {doc.type}
            </span>
          </div>
          <div className="col-span-2 text-neutral-600">
            {new Date(doc.date).toLocaleDateString()}
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>View Details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  );
}