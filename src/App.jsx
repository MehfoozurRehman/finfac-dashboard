import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import "./App.scss";
import Loan from "./screens/Loan";
import Category from "./screens/Category";
import CategoryChild from "./screens/CategoryChild";
import Customers from "./screens/Customers";
import DashboardPanel from "./screens/DashboardPanel";
import Login from "./screens/Login";
import SubCategory from "./screens/SubCategory";
import Sidebar from "./components/Sidebar";
import Users from "./screens/Users";
import UserRole from "./screens/UserRole";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<DashboardPanel />} />
        <Route path="users" element={<Users />} />
        <Route path="user_role" element={<UserRole />} />
        <Route path="category" element={<Category />} />
        <Route path="category/sub_category" element={<SubCategory />} />
        <Route path="category/sub_category/child" element={<CategoryChild />} />
        <Route
          path="invest_money/mutual_funds"
          element={<Loan heading="Mutual Funds" />}
        />
        <Route
          path="invest_money/national_savings"
          element={<Loan heading="National Savings" />}
        />
        <Route
          path="need_money/credit_card"
          element={<Loan heading="Credit Card" />}
        />
        <Route
          path="need_money/auto_loan"
          element={<Loan heading="Auto Loan" />}
        />
        <Route
          path="need_money/car_loans"
          element={<Loan heading="Car Loans" />}
        />
        <Route
          path="protection/health_insurance"
          element={<Loan heading="Health Insurance" />}
        />
        <Route
          path="protection/life_insurance"
          element={<Loan heading="Life Insurance" />}
        />
        <Route
          path="protection/travel_insurance"
          element={<Loan heading="Travel Insurance" />}
        />
        <Route
          path="protection/car_insurance"
          element={<Loan heading="Car Insurance" />}
        />
        <Route path="customers" element={<Customers />} />
      </Route>
    </Routes>
  );
}
