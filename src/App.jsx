import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Loan from "./screens/Loan";
import Category from "./screens/Category";
import CategoryChild from "./screens/CategoryChild";
import Customers from "./screens/Customers";
import Dashboard from "./screens/Dashboard";
import DashboardPanel from "./screens/DashboardPanel";
import InvestMoney from "./screens/InvestMoney";
import Login from "./screens/Login";
import NeedMoney from "./screens/NeedMoney";
import Protection from "./screens/Protection";
import SubCategory from "./screens/SubCategory";
import UserSettings from "./screens/UserSettings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<DashboardPanel />} />
        <Route path="user_settings" element={<UserSettings />} />
        <Route path="category" element={<Category />} />
        <Route path="category/sub_category" element={<SubCategory />} />
        <Route path="category/sub_category/child" element={<CategoryChild />} />
        <Route path="need_money" element={<NeedMoney />} />
        <Route path="need_money/auto_loan" element={<Loan />} />
        <Route path="need_money/car_loans" element={<Loan />} />
        <Route path="need_money/credit_card" element={<Loan />} />
        <Route path="invest_money" element={<InvestMoney />} />
        <Route path="protection" element={<Protection />} />
        <Route path="customers" element={<Customers />} />
      </Route>
    </Routes>
  );
}
