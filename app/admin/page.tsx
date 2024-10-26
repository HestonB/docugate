'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from '@/components/common/page-header';
import { UsersList } from '@/components/users/users-list';
import { DocumentManagement } from '@/components/documents/document-management';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title="Admin Dashboard" 
          description="Manage users and documents"
        />

        <Tabs defaultValue="users" className="mt-6">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          <TabsContent value="users" className="mt-6">
            <UsersList />
          </TabsContent>
          <TabsContent value="documents" className="mt-6">
            <DocumentManagement />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}