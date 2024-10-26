'use client';

import { useState } from 'react';
import { Plus, MoreVertical, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SearchBar } from '@/components/common/search-bar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data - replace with API call
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Client', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Client', status: 'Pending' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Client', status: 'Active' },
];

export function UsersList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Invite User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite New User</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input type="email" placeholder="user@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Role</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client">Client</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full" onClick={() => setIsInviteOpen(false)}>
                Send Invitation
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search users..."
      />

      <div className="bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-12 gap-4 p-4 border-b text-sm font-medium text-neutral-500">
          <div className="col-span-4">Name</div>
          <div className="col-span-3">Email</div>
          <div className="col-span-2">Role</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1">Actions</div>
        </div>

        {filteredUsers.map((user) => (
          <div key={user.id} className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center hover:bg-neutral-50">
            <div className="col-span-4 font-medium text-neutral-900">
              {user.name}
            </div>
            <div className="col-span-3 text-neutral-600">
              {user.email}
            </div>
            <div className="col-span-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {user.role}
              </span>
            </div>
            <div className="col-span-2">
              <span className={`px-2 py-1 rounded-full text-sm ${
                user.status === 'Active' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {user.status}
              </span>
            </div>
            <div className="col-span-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Mail className="h-4 w-4 mr-2" />
                    Resend Invite
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    Remove Access
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}