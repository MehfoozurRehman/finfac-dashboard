import React, { useState } from "react";
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
import Contacts from "./screens/Contacts";
import Blogs from "./screens/Blogs";
import Testimonials from "./screens/Testimonials";
import Partners from "./screens/Partners";
import CustomersApplied from "./screens/CustomersApplied";
import UserRolePopup from "./components/UserRolePopup";
import CategoryPopup from "./components/CategoryPopup";
import SubCategoryPopup from "./components/SubCategoryPopup";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default function App() {
  const [isEditUserRolePopup, setIsEditUserRolePopup] = useState(false);
  const [isAddUserRolePopup, setIsAddUserRolePopup] = useState(false);
  const [isEditCategoryPopup, setIsEditCategoryPopup] = useState(false);
  const [isAddCategoryPopup, setIsAddCategoryPopup] = useState(false);
  const [isEditSubCategoryPopup, setIsEditSubCategoryPopup] = useState(false);
  const [isAddSubCategoryPopup, setIsAddSubCategoryPopup] = useState(false);
  return (
    <>
      {isEditUserRolePopup ? (
        <UserRolePopup
          isEdit
          onClose={setIsEditUserRolePopup}
          onSubmit={setIsEditUserRolePopup}
        />
      ) : null}
      {isAddUserRolePopup ? (
        <UserRolePopup
          onClose={setIsAddUserRolePopup}
          onSubmit={setIsAddUserRolePopup}
        />
      ) : null}
      {isEditCategoryPopup ? (
        <CategoryPopup
          isEdit
          onClose={setIsEditCategoryPopup}
          onSubmit={setIsEditCategoryPopup}
        />
      ) : null}
      {isAddCategoryPopup ? (
        <CategoryPopup
          onClose={setIsAddCategoryPopup}
          onSubmit={setIsAddCategoryPopup}
        />
      ) : null}
      {isEditSubCategoryPopup ? (
        <SubCategoryPopup
          isEdit
          onClose={setIsEditSubCategoryPopup}
          onSubmit={setIsEditSubCategoryPopup}
        />
      ) : null}
      {isAddSubCategoryPopup ? (
        <SubCategoryPopup
          onClose={setIsAddSubCategoryPopup}
          onSubmit={setIsAddSubCategoryPopup}
        />
      ) : null}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardPanel />} />
          <Route path="users" element={<Users />} />
          <Route
            path="user_role"
            element={
              <UserRole
                onAdd={setIsAddUserRolePopup}
                onEdit={setIsEditUserRolePopup}
              />
            }
          />
          <Route
            path="category"
            element={
              <Category
                onAdd={setIsAddCategoryPopup}
                onEdit={setIsEditCategoryPopup}
              />
            }
          />
          <Route
            path="category/sub_category"
            element={
              <SubCategory
                onAdd={setIsAddSubCategoryPopup}
                onEdit={setIsEditSubCategoryPopup}
              />
            }
          />
          <Route
            path="category/sub_category/child"
            element={<CategoryChild />}
          />
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
            path="need_money/home_loans"
            element={<Loan heading="Home Loans" />}
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
          <Route path="customers/applied" element={<CustomersApplied />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="partners" element={<Partners />} />
        </Route>
      </Routes>
    </>
  );
}
