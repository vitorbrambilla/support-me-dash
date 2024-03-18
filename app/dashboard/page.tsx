import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeesStats from "./components/employees/employees-stats";

export default function DashboardPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="employees">Employees stats</TabsTrigger>

        <TabsTrigger value="teams">Teams stats</TabsTrigger>
      </TabsList>

      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>

      <TabsContent value="teams">teams stats</TabsContent>
    </Tabs>
  );
}
