import React, { lazy, Suspense, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import loading from "./assets/loading.gif";
import "./App.scss";

import MutualFunds from "./screens/MutualFunds";
import MutualFundsForm from "./screens/MutualFundsForm";
import MutualFundsManageEntries from "./screens/MutualFundsManageEntries";
import NationalSavings from "./screens/NationalSavings";
import NationalSavingsForm from "./screens/NationalSavingsForm";
import NationalSavingsManageEntries from "./screens/NationalSavingsManageEntries";
import CreditCards from "./screens/CreditCards";
import CreditCardsForm from "./screens/CreditCardsForm";
import CreditCardsManageEntries from "./screens/CreditCardsManageEntries";
import CarLoans from "./screens/CarLoans";
import CarLoansForm from "./screens/CarLoansForm";
import CarLoansManageEntries from "./screens/CarLoansManageEntries";
import HomeLoans from "./screens/HomeLoans";
import HomeLoansForm from "./screens/HomeLoansForm";
import HomeLoansManageEntries from "./screens/HomeLoansManageEntries";
import HealthInsurancesManageEntries from "./screens/HealthInsurancesManageEntries";
import HealthInsurancesForm from "./screens/HealthInsurancesForm";
import HealthInsurances from "./screens/HealthInsurances";
import LifeInsurances from "./screens/LifeInsurances";
import LifeInsurancesForm from "./screens/LifeInsurancesForm";
import LifeInsurancesManageEntries from "./screens/LifeInsurancesManageEntries";
import CarInsurances from "./screens/CarInsurances";
import CarInsurancesForm from "./screens/CarInsurancesForm";
import CarInsurancesManageEntries from "./screens/CarInsurancesManageEntries";
import TravelInsuracesManageEntries from "./screens/TravelInsuracesManageEntries";
import TravelInsuraces from "./screens/TravelInsuraces";
import TravelInsuracesForm from "./screens/TravelInsuracesForm";
import Category from "./screens/Category";
import SubCategory from "./screens/SubCategory";
import CategoryChild from "./screens/CategoryChild";
import Customers from "./screens/Customers";
import CustomersApplied from "./screens/CustomersApplied";
import Contacts from "./screens/Contacts";
import Users from "./screens/Users";
import UserRole from "./screens/UserRole";
import Blogs from "./screens/Blogs";
import Testimonials from "./screens/Testimonials";
import TestimonialsForm from "./screens/TestimonialsForm";
import Partners from "./screens/Partners";
import Kibors from "./screens/Kibors";
import DailyRates from "./screens/DailyRates";
import ManageEntries from "./screens/ManageEntries";
import DashboardPanel from "./screens/DashboardPanel";

import Sidebar from "./components/Sidebar";
import DeleteConfirmation from "./components/DeleteConfirmation";
import BanksPopup from "./components/BanksPopup";
import UserRolePopup from "./components/UserRolePopup";
import CategoryPopup from "./components/CategoryPopup";
import SubCategoryPopup from "./components/SubCategoryPopup";
import SubCategoryChildPopup from "./components/SubCategoryChildPopup";
import PartnersPopup from "./components/PartnersPopup";
import BlogsPopup from "./components/BlogsPopup";
import KiborsPopup from "./components/KiborsPopup";
import DailyRatesPopup from "./components/DailyRatesPopup";

const Login = lazy(() => import("./screens/Login"));
const Signup = lazy(() => import("./screens/Signup"));
const ChangePassword = lazy(() => import("./screens/ChangePassword"));
const ForgotPassword = lazy(() => import("./screens/ForgotPassword"));

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
            //data entries start
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
              path="credit_cards"
              element={
                <CreditCards
                  onDelete={() => {
                    setIsDeleteConfirmation(true);
                  }}
                />
              }
            />
            <Route
              path="credit_cards/add"
              element={<CreditCardsForm heading="Credit Cards Add" />}
            />
            <Route
              path="credit_cards/edit"
              element={<CreditCardsForm isEdit heading="Credit Cards Edit" />}
            />
            <Route
              path="credit_cards/entries"
              element={<CreditCardsManageEntries />}
            />
            <Route
              path="car_loans"
              element={
                <CarLoans
                  onDelete={() => {
                    setIsDeleteConfirmation(true);
                  }}
                />
              }
            />
            <Route
              path="car_loans/add"
              element={<CarLoansForm heading="Car Loans Add" />}
            />
            <Route
              path="car_loans/edit"
              element={<CarLoansForm isEdit heading="Car Loans Edit" />}
            />
            <Route
              path="car_loans/entries"
              element={<CarLoansManageEntries />}
            />
            <Route
              path="home_loans"
              element={
                <HomeLoans
                  onDelete={() => {
                    setIsDeleteConfirmation(true);
                  }}
                />
              }
            />
            <Route
              path="home_loans/add"
              element={<HomeLoansForm heading="Home Loans Add" />}
            />
            <Route
              path="home_loans/edit"
              element={<HomeLoansForm isEdit heading="Home Loans Edit" />}
            />
            <Route
              path="home_loans/entries"
              element={<HomeLoansManageEntries />}
            />
            <Route
              path="health_insurances"
              element={
                <HealthInsurances
                  onDelete={() => {
                    setIsDeleteConfirmation(true);
                  }}
                />
              }
            />
            <Route
              path="health_insurances/add"
              element={<HealthInsurancesForm heading="Health Insurances Add" />}
            />
            <Route
              path="health_insurances/edit"
              element={
                <HealthInsurancesForm isEdit heading="Health Insurances Edit" />
              }
            />
            <Route
              path="health_insurances/entries"
              element={<HealthInsurancesManageEntries />}
            />
            <Route
              path="life_insurances"
              element={
                <LifeInsurances
                  onDelete={() => {
                    setIsDeleteConfirmation(true);
                  }}
                />
              }
            />
            <Route
              path="life_insurances/add"
              element={<LifeInsurancesForm heading="Life Insurances Add" />}
            />
            <Route
              path="life_insurances/edit"
              element={
                <LifeInsurancesForm isEdit heading="Life Insurances Edit" />
              }
            />
            <Route
              path="life_insurances/entries"
              element={<LifeInsurancesManageEntries />}
            />
            <Route
              path="travel_insurances"
              element={
                <TravelInsuraces
                  onDelete={() => {
                    setIsDeleteConfirmation(true);
                  }}
                />
              }
            />
            <Route
              path="travel_insurances/add"
              element={<TravelInsuracesForm heading="Travel Insurances Add" />}
            />
            <Route
              path="travel_insurances/edit"
              element={
                <TravelInsuracesForm isEdit heading="Travel Insurances Edit" />
              }
            />
            <Route
              path="Travel_insurances/entries"
              element={<TravelInsuracesManageEntries />}
            />
            <Route
              path="car_insurances"
              element={
                <CarInsurances
                  onDelete={() => {
                    setIsDeleteConfirmation(true);
                  }}
                />
              }
            />
            <Route
              path="car_insurances/add"
              element={<CarInsurancesForm heading="Car Insurances Add" />}
            />
            <Route
              path="car_insurances/edit"
              element={
                <CarInsurancesForm isEdit heading="Car Insurances Edit" />
              }
            />
            <Route
              path="car_insurances/entries"
              element={<CarInsurancesManageEntries />}
            />
            //data entries end
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
