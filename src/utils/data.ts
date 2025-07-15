import type { KendoGridColumnProps } from "../components";

// Generate sample data
const generateEmployeeData = (count: number) => {
  const departments = ["Engineering", "Marketing", "Sales", "HR", "Finance"];
  const locations = ["New York", "London", "Tokyo", "San Francisco", "Berlin"];
  const positions = ["Developer", "Designer", "Manager", "Analyst", "Director"];
  const managers = [
    "Alex Johnson",
    "Sarah Williams",
    "Michael Brown",
    "Emily Davis",
    "David Wilson",
  ];

  const data = [];
  for (let i = 1; i <= count; i++) {
    const department =
      departments[Math.floor(Math.random() * departments.length)];
    data.push({
      id: i,
      employeeId: `EMP-${10000 + i}`,
      firstName: `First${i}`,
      lastName: `Last${i}`,
      position: positions[Math.floor(Math.random() * positions.length)],
      department,
      salary: 50000 + Math.floor(Math.random() * 100000),
      hireDate: new Date(
        2020 + Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28)
      ),
      email: `employee${i}@company.com`,
      phone: `+1-555-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(
        1000 + Math.random() * 9000
      )}`,
      location: locations[Math.floor(Math.random() * locations.length)],
      manager: managers[Math.floor(Math.random() * managers.length)],
      isActive: Math.random() > 0.1,
      performanceRating: parseFloat((3 + Math.random() * 2).toFixed(1)),
    });
  }
  return data;
};

export const gridData = generateEmployeeData(20);

export const columns: KendoGridColumnProps[] = [
  { field: "id", title: "DB ID", width: "80px" },
  { field: "employeeId", title: "Employee ID", width: "120px" },
  { field: "firstName", title: "First Name", width: "150px" },
  { field: "lastName", title: "Last Name", width: "150px" },
  { field: "position", title: "Position", width: "130px" },
  { field: "department", title: "Department", width: "150px" },
  {
    field: "salary",
    title: "Salary",
    width: "150px",
    format: "c0",
  },
  // {
  //   field: "hireDate",
  //   title: "Hire Date",
  //   width: "120px",
  // },
  { field: "email", title: "Email", width: "180px" },
  { field: "phone", title: "Phone", width: "200px" },
  { field: "location", title: "Location", width: "130px" },
  { field: "manager", title: "Manager", width: "100px" },
  {
    field: "isActive",
    title: "Active",
    width: "80px",
  },
  {
    field: "performanceRating",
    title: "Perf. Rating",
    format: "n1",
    width: "80px",
  },
];
