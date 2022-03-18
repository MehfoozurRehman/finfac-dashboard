import React, { lazy, Suspense, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import loading from "./assets/loading.gif";
import "./App.scss";
import MutualFunds from "./screens/MutualFunds";
import MutualFundsForm from "./screens/MutualFundsForm";
import MutualFundsManageEntries from "./screens/MutualFundsManageEntries";

import DeleteConfirmation from "./components/DeleteConfirmation";
import NationalSavings from "./screens/NationalSavings";
import NationalSavingsForm from "./screens/NationalSavingsForm";
import NationalSavingsManageEntries from "./screens/NationalSavingsManageEntries";
const Category = lazy(() => import("./screens/Category"));
const CategoryChild = lazy(() => import("./screens/CategoryChild"));
const Customers = lazy(() => import("./screens/Customers"));
const DashboardPanel = lazy(() => import("./screens/DashboardPanel"));
const Login = lazy(() => import("./screens/Login"));
const SubCategory = lazy(() => import("./screens/SubCategory"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const Users = lazy(() => import("./screens/Users"));
const UserRole = lazy(() => import("./screens/UserRole"));
const Contacts = lazy(() => import("./screens/Contacts"));
const Blogs = lazy(() => import("./screens/Blogs"));
const Testimonials = lazy(() => import("./screens/Testimonials"));
const Partners = lazy(() => import("./screens/Partners"));
const CustomersApplied = lazy(() => import("./screens/CustomersApplied"));
const UserRolePopup = lazy(() => import("./components/UserRolePopup"));
const CategoryPopup = lazy(() => import("./components/CategoryPopup"));
const SubCategoryPopup = lazy(() => import("./components/SubCategoryPopup"));
const LoanForm = lazy(() => import("./screens/LoanForm"));
const ManageEntries = lazy(() => import("./screens/ManageEntries"));
const PartnersPopup = lazy(() => import("./components/PartnersPopup"));
const BlogsPopup = lazy(() => import("./components/BlogsPopup"));
const TestimonialsForm = lazy(() => import("./screens/TestimonialsForm"));
const Signup = lazy(() => import("./screens/Signup"));
const ChangePassword = lazy(() => import("./screens/ChangePassword"));
const ForgotPassword = lazy(() => import("./screens/ForgotPassword"));
const Kibors = lazy(() => import("./screens/Kibors"));
const KiborsPopup = lazy(() => import("./components/KiborsPopup"));
const BanksPopup = lazy(() => import("./components/BanksPopup"));
const DailyRatesPopup = lazy(() => import("./components/DailyRatesPopup"));
const DailyRates = lazy(() => import("./screens/DailyRates"));

const SubCategoryChildPopup = lazy(() =>
  import("./components/SubCategoryChildPopup")
);

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
  const [isEditSubCategoryChildPopup, setIsEditSubCategoryChildPopup] =
    useState(false);
  const [isAddSubCategoryChildPopup, setIsAddSubCategoryChildPopup] =
    useState(false);
  const [isEditPartnersPopup, setIsEditPartnersPopup] = useState(false);
  const [isAddPartnersPopup, setIsAddPartnersPopup] = useState(false);
  const [isEditBlogsPopup, setIsEditBlogsPopup] = useState(false);
  const [isAddBlogsPopup, setIsAddBlogsPopup] = useState(false);
  const [isEditKiborsPopup, setIsEditKiborsPopup] = useState(false);
  const [isAddKiborsPopup, setIsAddKiborsPopup] = useState(false);
  const [isEditBanksPopup, setIsEditBanksPopup] = useState(false);
  const [isAddBanksPopup, setIsAddBanksPopup] = useState(false);
  const [isEditDailyRatesPopup, setIsEditDailyRatesPopup] = useState(false);
  const [isAddDailyRatesPopup, setIsAddDailyRatesPopup] = useState(false);
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);

  return (
    <>
      {isDeleteConfirmation ? (
        <DeleteConfirmation
          onClose={setIsDeleteConfirmation}
          onSubmit={setIsDeleteConfirmation}
        />
      ) : null}
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
      {isEditSubCategoryChildPopup ? (
        <SubCategoryChildPopup
          isEdit
          onClose={setIsEditSubCategoryChildPopup}
          onSubmit={setIsEditSubCategoryChildPopup}
        />
      ) : null}
      {isAddSubCategoryChildPopup ? (
        <SubCategoryChildPopup
          onClose={setIsAddSubCategoryChildPopup}
          onSubmit={setIsAddSubCategoryChildPopup}
        />
      ) : null}
      {isEditPartnersPopup ? (
        <PartnersPopup
          isEdit
          onClose={setIsEditPartnersPopup}
          onSubmit={setIsEditPartnersPopup}
        />
      ) : null}
      {isAddPartnersPopup ? (
        <PartnersPopup
          onClose={setIsAddPartnersPopup}
          onSubmit={setIsAddPartnersPopup}
        />
      ) : null}
      {isEditBlogsPopup ? (
        <BlogsPopup
          isEdit
          onClose={setIsEditBlogsPopup}
          onSubmit={setIsEditBlogsPopup}
        />
      ) : null}
      {isAddBlogsPopup ? (
        <BlogsPopup
          onClose={setIsAddBlogsPopup}
          onSubmit={setIsAddBlogsPopup}
        />
      ) : null}
      {isEditKiborsPopup ? (
        <KiborsPopup
          isEdit
          onClose={setIsEditKiborsPopup}
          onSubmit={setIsEditKiborsPopup}
        />
      ) : null}
      {isAddKiborsPopup ? (
        <KiborsPopup
          onClose={setIsAddKiborsPopup}
          onSubmit={setIsAddKiborsPopup}
        />
      ) : null}
      {isEditBanksPopup ? (
        <BanksPopup
          isEdit
          onClose={setIsEditBanksPopup}
          onSubmit={setIsEditBanksPopup}
        />
      ) : null}
      {isAddBanksPopup ? (
        <BanksPopup
          onClose={setIsAddBanksPopup}
          onSubmit={setIsAddBanksPopup}
        />
      ) : null}
      {isEditDailyRatesPopup ? (
        <DailyRatesPopup
          isEdit
          onClose={setIsEditDailyRatesPopup}
          onSubmit={setIsEditDailyRatesPopup}
        />
      ) : null}
      {isAddDailyRatesPopup ? (
        <DailyRatesPopup
          onClose={setIsAddDailyRatesPopup}
          onSubmit={setIsAddDailyRatesPopup}
        />
      ) : null}
      <Suspense
        fallback={
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={loading} alt="loading" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign_up" element={<Signup />} />
          <Route path="/change_password" element={<ChangePassword />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<DashboardPanel />} />
            <Route
              path="users"
              element={<Users onDelete={setIsDeleteConfirmation} />}
            />
            <Route
              path="user_role"
              element={
                <UserRole
                  onAdd={setIsAddUserRolePopup}
                  onEdit={setIsEditUserRolePopup}
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="category"
              element={
                <Category
                  onAdd={setIsAddCategoryPopup}
                  onEdit={setIsEditCategoryPopup}
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="category/sub_category"
              element={
                <SubCategory
                  onAdd={setIsAddSubCategoryPopup}
                  onEdit={setIsEditSubCategoryPopup}
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="category/sub_category/child"
              element={
                <CategoryChild
                  onAdd={setIsAddSubCategoryChildPopup}
                  onEdit={setIsEditSubCategoryChildPopup}
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="mutual_funds"
              element={
                <MutualFunds
                  onDelete={() => {
                    setIsDeleteConfirmation(true);
                  }}
                />
              }
            />
            <Route
              path="mutual_funds/add"
              element={<MutualFundsForm heading="Mutual Funds Add" />}
            />
            <Route
              path="mutual_funds/edit"
              element={<MutualFundsForm isEdit heading="Mutual Funds Edit" />}
            />
            <Route
              path="mutual_funds/entries"
              element={<MutualFundsManageEntries />}
            />
            <Route
              path="national_savings"
              element={
                <NationalSavings
                  onDelete={() => {
                    setIsDeleteConfirmation(true);
                  }}
                />
              }
            />
            <Route
              path="national_savings/add"
              element={<NationalSavingsForm heading="National Savings Add" />}
            />
            <Route
              path="national_savings/edit"
              element={
                <NationalSavingsForm isEdit heading="National Savings Edit" />
              }
            />
            <Route
              path="national_savings/entries"
              element={<NationalSavingsManageEntries />}
            />
            <Route
              path="manage_entries"
              element={<ManageEntries heading="Manage Entries" />}
            />
            <Route path="customers" element={<Customers />} />
            <Route path="customers/applied" element={<CustomersApplied />} />
            <Route
              path="contact"
              element={<Contacts onDelete={setIsDeleteConfirmation} />}
            />
            <Route
              path="blogs"
              element={
                <Blogs
                  onAdd={setIsAddBlogsPopup}
                  onEdit={setIsEditBlogsPopup}
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="testimonials"
              element={<Testimonials onDelete={setIsDeleteConfirmation} />}
            />
            <Route
              path="testimonials/add"
              element={<TestimonialsForm heading="Add" />}
            />
            <Route
              path="testimonials/edit"
              element={<TestimonialsForm heading="Edit" />}
            />
            <Route
              path="partners"
              element={
                <Partners
                  onAdd={setIsAddPartnersPopup}
                  onEdit={setIsEditPartnersPopup}
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="kibors"
              element={
                <Kibors
                  onAdd={setIsAddKiborsPopup}
                  onEdit={setIsEditKiborsPopup}
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="banks"
              element={
                <Kibors
                  onAdd={setIsAddBanksPopup}
                  onEdit={setIsEditBanksPopup}
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="daily_rates"
              element={
                <DailyRates
                  onAdd={setIsAddDailyRatesPopup}
                  onEdit={setIsEditDailyRatesPopup}
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
