import { Card, CardContent, CardHeader, CardTitle } from './card.jsx';
import { 
  UserPlus, 
  DollarSign, 
  FileText, 
  Calendar,
  Send,
  ClipboardList,
  ArrowRight
} from 'lucide-react';

const actions = [
  {
    id: 1,
    title: 'New Admission',
    description: 'Enroll a new student',
    icon: UserPlus,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    id: 2,
    title: 'Collect Fees',
    description: 'Record fee payment',
    icon: DollarSign,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
  },
  {
    id: 3,
    title: 'Mark Attendance',
    description: 'Take class attendance',
    icon: ClipboardList,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
  },
  {
    id: 4,
    title: 'Create Exam',
    description: 'Schedule new exam',
    icon: FileText,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
  },
  {
    id: 5,
    title: 'Send Notice',
    description: 'Broadcast announcement',
    icon: Send,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-100',
  },
  {
    id: 6,
    title: 'Add Event',
    description: 'Schedule calendar event',
    icon: Calendar,
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-100',
  },
];

export function QuickActionsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
              >
                <div className={`w-10 h-10 rounded-lg ${action.iconBg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${action.iconColor}`} />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-gray-900">{action.title}</p>
                  <p className="text-xs text-gray-500">{action.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
