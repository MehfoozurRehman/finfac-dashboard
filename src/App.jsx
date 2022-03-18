import React, { lazy, Suspense, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import loading from "./assets/loading.gif";
import "./App.scss";
const Loan = lazy(() => import("./screens/Loan"));
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
const DeleteConfirmation = lazy(() =>
  import("./components/DeleteConfirmation")
);
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
              path="invest_money/mutual_funds"
              element={
                <Loan
                  headerList={[
                    "Ref",
                    "Name",
                    "Image",
                    "Is Featured",
                    "AMC Rating",
                    "AUM Billion",
                    "Sahriah compliant option",
                    "Web portal and App",
                    "Online Account opening",
                    "Online Investment",
                    "Debit Card",
                    "Interbank Fund Transfer",
                    "Additional Coverage - Insurance",
                    "WhatsApp Service",
                    "Fund Name",
                    "30 Days",
                    "90 Days",
                    "365 Days",
                    "Fund Name",
                    "1 year",
                    "3 year",
                    "5 year",
                  ]}
                  formEntryList={[
                    { label: "Ref", type: "input" },
                    { label: "Name", type: "input" },
                    { label: "AMC Rating", type: "input" },
                    { label: "AUM Billion", type: "input" },
                    { label: "Sahriah compliant option", type: "input" },
                    {
                      label: "Web portal and App",
                      type: "select",
                      options: [
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" },
                      ],
                    },
                    { label: "Online Account opening", type: "input" },
                    {
                      label: "Online Investment",
                      type: "select",
                      options: [
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" },
                      ],
                    },
                    { label: "Debit Card", type: "input" },
                    { label: "Interbank Fund Transfer", type: "input" },
                    { label: "Additional Coverage - Insurance", type: "input" },
                    { label: "WhatsApp Service", type: "input" },
                    { label: "Fund Name", type: "input" },
                    { label: "30 Days", type: "input" },
                    { label: "90 Days", type: "input" },
                    { label: "365 Days", type: "input" },
                    { label: "Fund Name", type: "input" },
                    { label: "1 year", type: "input" },
                    { label: "3 year", type: "input" },
                    { label: "5 year", type: "input" },
                  ]}
                  heading="Mutual Funds"
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="invest_money/national_savings"
              element={
                <Loan
                  headerList={[
                    "Ref",
                    "Name",
                    "Image",
                    "Is Featured",
                    "Rate - %",
                    "Time Period",
                    "Profit Paid",
                    "Lock In Period",
                    "Early Encashment",
                    "Zakat Deduction",
                    "WHT on Profit - %",
                    "Risk Level",
                    "Instrument Limit",
                  ]}
                  formEntryList={[
                    { label: "Ref", type: "input" },
                    { label: "Name", type: "input" },
                    { label: "AMC Rating", type: "input" },
                    { label: "AUM Billion", type: "input" },
                    { label: "Sahriah compliant option", type: "input" },
                    {
                      label: "Web portal and App",
                      type: "select",
                      options: [
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" },
                      ],
                    },
                    { label: "Online Account opening", type: "input" },
                    {
                      label: "Online Investment",
                      type: "select",
                      options: [
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" },
                      ],
                    },
                    { label: "Debit Card", type: "input" },
                    { label: "Interbank Fund Transfer", type: "input" },
                    { label: "Additional Coverage - Insurance", type: "input" },
                    { label: "WhatsApp Service", type: "input" },
                    { label: "Fund Name", type: "input" },
                    { label: "30 Days", type: "input" },
                    { label: "90 Days", type: "input" },
                    { label: "365 Days", type: "input" },
                    { label: "Fund Name", type: "input" },
                    { label: "1 year", type: "input" },
                    { label: "3 year", type: "input" },
                    { label: "5 year", type: "input" },
                  ]}
                  heading="National Savings"
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="need_money/credit_card"
              element={
                <Loan
                  headerList={[
                    "Ref",
                    "Name",
                    "Image",
                    "Is Featured",
                    "Interest Rate - %",
                    "Annual Fee",
                    "Waiver of Annual Fee",
                    "Chip Maintenance Fee",
                    "Late Payment Fee",
                    "Cash Advance Facility",
                    "Cash Advance Rate - %",
                    "Cash Advance Fee",
                    "Balance Transfer Rate - %",
                    "Balance Transfer Chargers",
                    "Card Type",
                    "Time period required for waiver",
                    "Interest Free Period - Days",
                    "Balance Transfer Facility",
                    "Foreign Transaction Fee",
                    "Reward Points",
                    "Zero Loss Liability ",
                    "SMS Charges",
                  ]}
                  formEntryList={[
                    { label: "Ref", type: "input" },
                    { label: "Name", type: "input" },
                    { label: "AMC Rating", type: "input" },
                  ]}
                  heading="Credit Card"
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="need_money/auto_loan"
              element={
                <Loan
                  headerList={[
                    "Ref",
                    "Name",
                    "Image",
                    "Is Featured",
                    "Type",
                    "Minimum Down Payment",
                    "Rate Category",
                    "Kibor -Dropdown",
                    "Spread",
                    "Insurance Rate",
                    "Processing Fee",
                    "Application Fee",
                    "Tracker Charges",
                    "Registration Cost",
                    "Late Payment Charges",
                    "Baloon Payment",
                    "Baloon Payment Charges",
                    "Prepayment",
                    "Prepayment Charges",
                    "Ownership",
                    "Deferred instalment facility",
                    "Who will bear registration cost?",
                    "Occupation",
                  ]}
                  formEntryList={[
                    { label: "Ref", type: "input" },
                    { label: "Name", type: "input" },
                    { label: "Type", type: "input" },
                    { label: "Minimum Down Payment", type: "input" },
                    { label: "Rate Category", type: "input" },
                    { label: "Kibor -Dropdown", type: "input" },
                    { label: "Spread", type: "input" },
                    { label: "Insurance Rate", type: "input" },
                    { label: "Processing Fee", type: "input" },
                    { label: "Application Fee", type: "input" },
                    { label: "Tracker Charges", type: "input" },
                    { label: "Registration Cost", type: "input" },
                    { label: "Late Payment Charges", type: "input" },
                    { label: "Baloon Payment", type: "input" },
                    { label: "Baloon Payment Charges", type: "input" },
                    { label: "Ownership", type: "input" },
                    { label: "Deferred instalment facility", type: "input" },
                    {
                      label: "Who will bear registration cost?",
                      type: "input",
                    },
                    { label: "Occupation", type: "input" },
                  ]}
                  heading="Auto Loan"
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="need_money/car_loans"
              element={
                <Loan
                  headerList={[
                    "Ref",
                    "Name",
                    "Image",
                    "Is Featured",
                    "Rate - %",
                    "Time Period",
                    "Profit Paid",
                    "Lock In Period",
                    "Early Encashment",
                    "Zakat Deduction",
                    "WHT on Profit - %",
                    "Risk Level",
                    "Instrument Limit",
                  ]}
                  formEntryList={[
                    { label: "Ref", type: "input" },
                    { label: "Name", type: "input" },
                    { label: "Rate - %", type: "input" },
                    { label: "Time Period", type: "input" },
                    { label: "Profit Paid", type: "input" },
                    { label: "Lock In Period", type: "input" },
                    { label: "Early Encashment", type: "input" },
                    { label: "Zakat Deduction", type: "input" },
                    { label: "WHT on Profit - %", type: "input" },
                    { label: "Risk Level", type: "input" },
                    { label: "Instrument Limit", type: "input" },
                  ]}
                  heading="Car Loans"
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="need_money/home_loans"
              element={
                <Loan
                  headerList={[
                    "Ref",
                    "Name",
                    "Image",
                    "Is Featured",
                    "Minimum down payment",
                    "Type",
                    "Category",
                    "KIBOR -Dropdown",
                    "Spread",
                    "Insurance Rate",
                    "Processing Fee",
                    "Application Fee",
                    "Max Limit -%",
                    "Late Payment Charges",
                    "Baloon Payment",
                    "Baloon Payment Charges",
                    "Prepayment",
                    "Prepayment Charges",
                    "Financing Limit",
                    "Deferred Instalment",
                    "Occupation",
                  ]}
                  formEntryList={[
                    { label: "Ref", type: "input" },
                    { label: "Name", type: "input" },
                    { label: "AMC Rating", type: "input" },
                    { label: "AUM Billion", type: "input" },
                    { label: "Sahriah compliant option", type: "input" },
                    {
                      label: "Web portal and App",
                      type: "select",
                      options: [
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" },
                      ],
                    },
                    { label: "Online Account opening", type: "input" },
                    {
                      label: "Online Investment",
                      type: "select",
                      options: [
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" },
                      ],
                    },
                    { label: "Debit Card", type: "input" },
                    { label: "Interbank Fund Transfer", type: "input" },
                    { label: "Additional Coverage - Insurance", type: "input" },
                    { label: "WhatsApp Service", type: "input" },
                    { label: "Fund Name", type: "input" },
                    { label: "30 Days", type: "input" },
                    { label: "90 Days", type: "input" },
                    { label: "365 Days", type: "input" },
                    { label: "Fund Name", type: "input" },
                    { label: "1 year", type: "input" },
                    { label: "3 year", type: "input" },
                    { label: "5 year", type: "input" },
                  ]}
                  heading="Home Loans"
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="protection/health_insurance"
              element={
                <Loan
                  headerList={[
                    "Ref",
                    "Name",
                    "Image",
                    "Is Featured",
                    "Premium",
                    "Room Limit",
                    "Hospitalization Limit",
                    "Accidental Injury treatment",
                    "Hospitalization Costs?",
                    "Expenses before hospitalization?",
                    "Expenses after hospitalization?",
                    "Day care surgery",
                    "Radiotherapy",
                    "Pre-existing conditions",
                    "Waiting period",
                    "Maternity",
                    "Outside Network Reimbursement",
                  ]}
                  formEntryList={[
                    { label: "Ref", type: "input" },
                    { label: "Name", type: "input" },
                    { label: "Premium", type: "input" },
                    { label: "Room Limit", type: "input" },
                    { label: "Hospitalization Limit", type: "input" },
                    { label: "Accidental Injury treatment", type: "input" },
                    { label: "Hospitalization Costs?", type: "input" },
                    {
                      label: "Expenses before hospitalization?",
                      type: "input",
                    },
                    { label: "Expenses after hospitalization?", type: "input" },
                    { label: "Day care surgery", type: "input" },
                    { label: "Radiotherapy", type: "input" },
                    { label: "Pre-existing conditions", type: "input" },
                    { label: "Waiting period", type: "input" },
                    { label: "Maternity", type: "input" },
                    { label: "Outside Network Reimbursement", type: "input" },
                  ]}
                  heading="Health Insurance"
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="protection/life_insurance"
              element={
                <Loan
                  headerList={[
                    "Ref",
                    "Name",
                    "Is Featured",
                    "Premium",
                    "Room Limit",
                    "Accidental Death",
                    "Accidental Disability",
                    "Accidental hospitalization",
                    "Coverage Amount",
                    "Date of Birth",
                    "Plan type",
                  ]}
                  formEntryList={[
                    { label: "Ref", type: "input" },
                    { label: "Name", type: "input" },
                    { label: "Premium", type: "input" },
                    { label: "Room Limit", type: "input" },
                    { label: "Accidental Death", type: "input" },
                    { label: "Accidental Disability", type: "input" },
                    { label: "Accidental hospitalization", type: "input" },
                    { label: "Coverage Amount", type: "input" },
                    { label: "Date of Birth", type: "input" },
                    { label: "Plan type", type: "input" },
                  ]}
                  heading="Life Insurance"
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="protection/travel_insurance"
              element={
                <Loan
                  headerList={[
                    "Premium",
                    "Medical Cover",
                    "Coverage upto",
                    "Emergency medical cover",
                    "Repatriation of mortal remains",
                    "Emergency medical evacuation",
                    "Emergency Dental care",
                    "Emergency return home",
                    "Deductible",
                    "Accidental death / permanent disability",
                    "Baggage loss",
                    "Baggage delay",
                    "Flight delay",
                    "Trip cancellation",
                    "Credit card loss",
                    "Passport loss",
                    "Country",
                    "Travel time",
                    "Passenger",
                    "Date of Birth",
                  ]}
                  formEntryList={[
                    { label: "Premium", type: "input" },
                    { label: "Medical Cover", type: "input" },
                    { label: "Coverage upto", type: "input" },
                    { label: "Emergency medical cover", type: "input" },
                    { label: "Repatriation of mortal remains", type: "input" },
                    { label: "Emergency medical evacuation", type: "input" },
                    { label: "Emergency Dental care", type: "input" },
                    { label: "Emergency return home", type: "input" },
                    { label: "Deductible", type: "input" },
                    {
                      label: "Accidental death / permanent disability",
                      type: "input",
                    },
                    { label: "Baggage loss", type: "input" },
                    { label: "Baggage delay", type: "input" },
                    { label: "Flight delay", type: "input" },
                    { label: "Trip cancellation", type: "input" },
                    { label: "Credit card loss", type: "input" },
                    { label: "Passport loss", type: "input" },
                    {
                      label: "Country",
                      type: "select",
                      options: [
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" },
                      ],
                    },
                    { label: "Travel time", type: "input" },
                    { label: "Passenger", type: "input" },
                    { label: "Date of Birth", type: "input" },
                  ]}
                  heading="Travel Insurance"
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="protection/car_insurance"
              element={
                <Loan
                  headerList={[
                    "Ref",
                    "Name",
                    "Image",
                    "Is Featured",
                    "Insurance Rate -%",
                    "Tracker Option",
                    "Accidental Damages",
                    "Fire",
                    "Total Loss",
                    "Theft/Snatch",
                    "Natural Calamities",
                    "Riots and Strike",
                    "Terrorism",
                    "Deductible",
                    "No Claim Discount",
                    "Death Bodily Injury",
                    "Property Damages",
                    "Emergency Medical Expenses",
                    "Cal Centre Support ",
                    "In-House Surveyors",
                    "Replacement at Doorstep",
                    "Mobile App",
                    "Self-Assessment at approved dealership",
                    "Make",
                    "Model",
                    "Year of Manufacturing",
                  ]}
                  formEntryList={[
                    { label: "Ref", type: "input" },
                    { label: "Name", type: "input" },
                    { label: "Insurance Rate -%", type: "input" },
                    {
                      label: "Tracker Option",
                      type: "select",
                      options: [
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" },
                      ],
                    },
                    { label: "Accidental Damages", type: "input" },
                    { label: "Fire", type: "input" },
                    { label: "Total Loss", type: "input" },
                    { label: "Theft/Snatch", type: "input" },
                    { label: "Natural Calamities", type: "input" },
                    { label: "Riots and Strike", type: "input" },
                    { label: "Terrorism", type: "input" },
                    {
                      label: "Deductible",
                      type: "select",
                      options: [
                        { value: true, label: "True" },
                        { value: false, label: "False" },
                      ],
                    },
                    { label: "No Claim Discount", type: "input" },
                    { label: "Death Bodily Injury", type: "input" },
                    { label: "Property Damages", type: "input" },
                    { label: "Emergency Medical Expenses", type: "input" },
                    { label: "Cal Centre Support ", type: "input" },
                    { label: "In-House Surveyors", type: "input" },
                    { label: "Replacement at Doorstep", type: "input" },
                    { label: "Mobile App", type: "input" },
                    {
                      label: "Self-Assessment at approved dealership",
                      type: "input",
                    },
                    { label: "Make", type: "input" },
                    { label: "Model", type: "input" },
                    { label: "Year of Manufacturing", type: "input" },
                  ]}
                  heading="Car Insurance"
                  onDelete={setIsDeleteConfirmation}
                />
              }
            />
            <Route
              path="loan_form/edit"
              element={<LoanForm heading="Edit" />}
            />
            <Route
              path="loan_form/add"
              element={<LoanForm heading="Add New" />}
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
