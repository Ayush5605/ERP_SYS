
import { StatsCard } from '../../components/ui/StatsCard.jsx';
import { IncomeExpenseChart } from '../../components/ui/IncomeExpenseChart.jsx';
import { AttendanceChart } from '../../components/ui/AttendanceChart.jsx';
import { AttendancePieChart } from '../../components/ui/AttendancePieChart.jsx';
import { RecentActivities } from "../../components/ui/RecentActivities.jsx";
import { QuickActionsPanel } from '../../components/ui/QuickActionsPanel.jsx';
import { 
  Users, 
  DollarSign, 
  GraduationCap, 
  UserCheck,
  TrendingUp,
  Calendar
} from 'lucide-react';







export default function AdminDashboard() {
  return (
    
      <div className="p-6 space-y-6">
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>January 3, 2026</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Students"
            value="1,390"
            change="12% from last month"
            changeType="increase"
            icon={Users}
            iconColor="text-blue-600"
            iconBgColor="bg-blue-100"
          />
          <StatsCard
            title="Fees Collected"
            value="$328,500"
            change="8% from last month"
            changeType="increase"
            icon={DollarSign}
            iconColor="text-green-600"
            iconBgColor="bg-green-100"
          />
          <StatsCard
            title="Total Staff"
            value="142"
            change="3 new this month"
            changeType="increase"
            icon={GraduationCap}
            iconColor="text-purple-600"
            iconBgColor="bg-purple-100"
          />
          <StatsCard
            title="Today's Attendance"
            value="89.6%"
            change="2% from yesterday"
            changeType="decrease"
            icon={UserCheck}
            iconColor="text-orange-600"
            iconBgColor="bg-orange-100"
          />
        </div>

        {/* Quick Actions */}
        <QuickActionsPanel />

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IncomeExpenseChart />
          <AttendanceChart />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <AttendancePieChart />
          </div>
          <div className="lg:col-span-2">
            <RecentActivities />
          </div>
        </div>

        {/* Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-blue-100">This Month</p>
                <h3 className="text-2xl font-semibold">156</h3>
              </div>
            </div>
            <p className="text-sm text-blue-100">New Admissions</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-green-100">Pending Fees</p>
                <h3 className="text-2xl font-semibold">$42,350</h3>
              </div>
            </div>
            <p className="text-sm text-green-100">From 245 Students</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-purple-100">Upcoming Exams</p>
                <h3 className="text-2xl font-semibold">8</h3>
              </div>
            </div>
            <p className="text-sm text-purple-100">Next: Mid-Term (Jan 15)</p>
          </div>
        </div>
      </div>
    
  )
}
