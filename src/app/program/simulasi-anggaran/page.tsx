"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../home-component/navbar";
import Footer from "../../home-component/footer";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

// Budget category types
type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
  recommended: number;
};

// Transaction type
type Transaction = {
  id: string;
  category: string;
  amount: number;
  description: string;
  date: string;
};

// Budget summary type
type BudgetSummary = {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  savingsRate: number;
};

export default function SimulasiAnggaran() {
  // Income state
  const [income, setIncome] = useState<number>(0);
  const [incomeSource, setIncomeSource] = useState<string>("");
  const [incomeSources, setIncomeSources] = useState<
    { source: string; amount: number }[]
  >([]);

  // Expense categories
  const [categories] = useState<Category[]>([
    {
      id: "kebutuhan-pokok",
      name: "Kebutuhan Pokok",
      icon: "🍲",
      color: "#FF6384",
      recommended: 50,
    },
    {
      id: "transportasi",
      name: "Transportasi",
      icon: "🚗",
      color: "#36A2EB",
      recommended: 15,
    },
    {
      id: "pendidikan",
      name: "Pendidikan",
      icon: "📚",
      color: "#FFCE56",
      recommended: 10,
    },
    {
      id: "kesehatan",
      name: "Kesehatan",
      icon: "🏥",
      color: "#4BC0C0",
      recommended: 10,
    },
    {
      id: "hiburan",
      name: "Hiburan",
      icon: "🎬",
      color: "#9966FF",
      recommended: 5,
    },
    // {
    //   id: "tabungan",
    //   name: "Tabungan",
    //   icon: "💰",
    //   color: "#FF9F40",
    //   recommended: 10,
    // },
  ]);

  // Expense state
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [expenseAmount, setExpenseAmount] = useState<number>(0);
  const [expenseDescription, setExpenseDescription] = useState<string>("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Budget summary
  const [budgetSummary, setBudgetSummary] = useState<BudgetSummary>({
    totalIncome: 0,
    totalExpenses: 0,
    balance: 0,
    savingsRate: 0,
  });

  // Financial health status
  const [financialHealth, setFinancialHealth] = useState<{
    status: string;
    color: string;
    message: string;
  }>({
    status: "Belum Dihitung",
    color: "text-gray-500",
    message: "Masukkan data pendapatan dan pengeluaran untuk melihat status keuangan keluarga Anda.",
  });

  // Recommendations state
  const [recommendations, setRecommendations] = useState<string[]>([]);

  // Step state for the wizard
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Calculate budget summary whenever transactions or income changes
  useEffect(() => {
    const totalIncome = incomeSources.reduce((sum, source) => sum + source.amount, 0);
    
    const totalExpenses = transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );
    
    const balance = totalIncome - totalExpenses;
    
    const savingsRate = totalIncome > 0 ? (balance / totalIncome) * 100 : 0;
    
    setBudgetSummary({
      totalIncome,
      totalExpenses,
      balance,
      savingsRate,
    });

    // Generate financial health status
    if (totalIncome === 0) {
      setFinancialHealth({
        status: "Belum Dihitung",
        color: "text-gray-500",
        message: "Masukkan data pendapatan dan pengeluaran untuk melihat status keuangan keluarga Anda.",
      });
    } else if (savingsRate >= 20) {
      setFinancialHealth({
        status: "Sangat Baik",
        color: "text-green-600",
        message: "Anda memiliki tingkat tabungan yang sangat baik. Pertimbangkan untuk berinvestasi.",
      });
    } else if (savingsRate >= 10) {
      setFinancialHealth({
        status: "Baik",
        color: "text-green-500",
        message: "Keuangan Anda dalam kondisi baik. Pertahankan dan tingkatkan tabungan Anda.",
      });
    } else if (savingsRate > 0) {
      setFinancialHealth({
        status: "Cukup",
        color: "text-yellow-500",
        message: "Anda masih memiliki saldo positif, namun perlu meningkatkan tabungan.",
      });
    } else if (savingsRate === 0) {
      setFinancialHealth({
        status: "Waspada",
        color: "text-orange-500",
        message: "Pendapatan dan pengeluaran Anda seimbang. Tidak ada tabungan untuk keadaan darurat.",
      });
    } else {
      setFinancialHealth({
        status: "Kritis",
        color: "text-red-600",
        message: "Pengeluaran Anda melebihi pendapatan. Segera evaluasi dan kurangi pengeluaran.",
      });
    }

    // Generate recommendations
    const newRecommendations = [];
    
    if (savingsRate < 10) {
      newRecommendations.push("Tingkatkan tabungan hingga minimal 10% dari pendapatan.");
    }
    
    // Check if any category exceeds recommended percentage
    const categoryTotals: Record<string, number> = {};
    transactions.forEach((transaction) => {
      if (!categoryTotals[transaction.category]) {
        categoryTotals[transaction.category] = 0;
      }
      categoryTotals[transaction.category] += transaction.amount;
    });
    
    categories.forEach((category) => {
      const categoryTotal = categoryTotals[category.id] || 0;
      const categoryPercentage = totalIncome > 0 ? (categoryTotal / totalIncome) * 100 : 0;
      
      if (categoryPercentage > category.recommended + 5) {
        newRecommendations.push(
          `Pengeluaran untuk ${category.name} (${categoryPercentage.toFixed(1)}%) melebihi rekomendasi (${category.recommended}%). Pertimbangkan untuk mengurangi.`
        );
      }
    });
    
    if (totalExpenses > totalIncome) {
      newRecommendations.push(
        "Pengeluaran melebihi pendapatan. Evaluasi pengeluaran yang dapat dikurangi."
      );
    }
    
    if (newRecommendations.length === 0 && totalIncome > 0) {
      newRecommendations.push(
        "Keuangan Anda dalam kondisi baik. Pertimbangkan untuk berinvestasi untuk masa depan."
      );
    }
    
    setRecommendations(newRecommendations);
  }, [transactions, incomeSources, categories]);

  // Handle adding income source
  const handleAddIncomeSource = () => {
    if (incomeSource && income > 0) {
      setIncomeSources([...incomeSources, { source: incomeSource, amount: income }]);
      setIncomeSource("");
      setIncome(0);
    }
  };

  // Handle adding expense
  const handleAddExpense = () => {
    if (selectedCategory && expenseAmount > 0) {
      const newTransaction: Transaction = {
        id: Date.now().toString(),
        category: selectedCategory,
        amount: expenseAmount,
        description: expenseDescription || "Tidak ada deskripsi",
        date: new Date().toISOString().split("T")[0],
      };
      
      setTransactions([...transactions, newTransaction]);
      setSelectedCategory("");
      setExpenseAmount(0);
      setExpenseDescription("");
    }
  };

  // Handle removing a transaction
  const handleRemoveTransaction = (id: string) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  // Handle removing an income source
  const handleRemoveIncomeSource = (index: number) => {
    const newSources = [...incomeSources];
    newSources.splice(index, 1);
    setIncomeSources(newSources);
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Prepare chart data
  const pieChartData = {
    labels: categories.map((category) => category.name),
    datasets: [
      {
        data: categories.map((category) => {
          return transactions
            .filter((t) => t.category === category.id)
            .reduce((sum, t) => sum + t.amount, 0);
        }),
        backgroundColor: categories.map((category) => category.color),
        borderWidth: 1,
      },
    ],
  };

  const barChartData = {
    labels: ["Pendapatan", "Pengeluaran", "Sisa"],
    datasets: [
      {
        label: "Jumlah (Rp)",
        data: [
          budgetSummary.totalIncome,
          budgetSummary.totalExpenses,
          budgetSummary.balance,
        ],
        backgroundColor: ["#4ade80", "#f87171", "#60a5fa"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  // Next step in wizard
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Previous step in wizard
  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Simulasi Anggaran Keluarga
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Rencanakan keuangan keluarga Anda dengan lebih baik. Simulasi ini membantu
              Anda mengatur pendapatan dan pengeluaran untuk mencapai kesejahteraan finansial.
            </p>
          </div>

          {/* Wizard Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              <div 
                className={`flex flex-col items-center ${
                  currentStep >= 1 ? "text-teal-600" : "text-gray-400"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  currentStep >= 1 ? "bg-teal-100 text-teal-600" : "bg-gray-100 text-gray-400"
                }`}>
                  1
                </div>
                <span className="text-sm">Pendapatan</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${
                currentStep >= 2 ? "bg-teal-400" : "bg-gray-200"
              }`}></div>
              
              <div 
                className={`flex flex-col items-center ${
                  currentStep >= 2 ? "text-teal-600" : "text-gray-400"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  currentStep >= 2 ? "bg-teal-100 text-teal-600" : "bg-gray-100 text-gray-400"
                }`}>
                  2
                </div>
                <span className="text-sm">Pengeluaran</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${
                currentStep >= 3 ? "bg-teal-400" : "bg-gray-200"
              }`}></div>
              
              <div 
                className={`flex flex-col items-center ${
                  currentStep >= 3 ? "text-teal-600" : "text-gray-400"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  currentStep >= 3 ? "bg-teal-100 text-teal-600" : "bg-gray-100 text-gray-400"
                }`}>
                  3
                </div>
                <span className="text-sm">Analisis</span>
              </div>
            </div>
          </div>

          {/* Step 1: Income */}
          {currentStep === 1 && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Langkah 1: Masukkan Pendapatan Keluarga
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                  <label htmlFor="incomeSource" className="block text-sm font-medium text-gray-700 mb-1">
                      Sumber Pendapatan
                    </label>
                    <input
                      type="text"
                      id="incomeSource"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Contoh: Gaji, Bisnis, Investasi"
                      value={incomeSource}
                      onChange={(e) => setIncomeSource(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="incomeAmount" className="block text-sm font-medium text-gray-700 mb-1">
                      Jumlah (Rp)
                    </label>
                    <input
                      type="number"
                      id="incomeAmount"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Contoh: 5000000"
                      value={income || ""}
                      onChange={(e) => setIncome(Number(e.target.value))}
                    />
                  </div>
                  
                  <button
                    onClick={handleAddIncomeSource}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    disabled={!incomeSource || income <= 0}
                  >
                    Tambah Sumber Pendapatan
                  </button>
                  
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">
                      Tip: Masukkan semua sumber pendapatan keluarga untuk hasil yang akurat.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Daftar Sumber Pendapatan</h3>
                  
                  {incomeSources.length === 0 ? (
                    <div className="bg-gray-50 rounded-md p-4 text-center text-gray-500">
                      Belum ada sumber pendapatan yang ditambahkan
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                      {incomeSources.map((source, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-md p-3 flex justify-between items-center"
                        >
                          <div>
                            <p className="font-medium text-gray-800">{source.source}</p>
                            <p className="text-teal-600">{formatCurrency(source.amount)}</p>
                          </div>
                          <button
                            onClick={() => handleRemoveIncomeSource(index)}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Hapus sumber pendapatan"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {incomeSources.length > 0 && (
                    <div className="mt-4 p-3 bg-teal-50 rounded-md">
                      <p className="font-medium text-gray-800">Total Pendapatan:</p>
                      <p className="text-xl font-semibold text-teal-600">
                        {formatCurrency(budgetSummary.totalIncome)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  onClick={goToNextStep}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-6 rounded-md transition-colors flex items-center"
                  disabled={incomeSources.length === 0}
                >
                  Lanjut ke Pengeluaran
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Expenses */}
          {currentStep === 2 && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Langkah 2: Masukkan Pengeluaran Keluarga
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="expenseCategory" className="block text-sm font-medium text-gray-700 mb-1">
                      Kategori Pengeluaran
                    </label>
                    <select
                      id="expenseCategory"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">Pilih Kategori</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.icon} {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="expenseAmount" className="block text-sm font-medium text-gray-700 mb-1">
                      Jumlah (Rp)
                    </label>
                    <input
                      type="number"
                      id="expenseAmount"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Contoh: 1000000"
                      value={expenseAmount || ""}
                      onChange={(e) => setExpenseAmount(Number(e.target.value))}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="expenseDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Deskripsi (Opsional)
                    </label>
                    <input
                      type="text"
                      id="expenseDescription"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Contoh: Belanja bulanan"
                      value={expenseDescription}
                      onChange={(e) => setExpenseDescription(e.target.value)}
                    />
                  </div>
                  
                  <button
                    onClick={handleAddExpense}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    disabled={!selectedCategory || expenseAmount <= 0}
                  >
                    Tambah Pengeluaran
                  </button>
                  
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Tip: Kelompokkan pengeluaran berdasarkan kategori untuk analisis yang lebih baik.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Daftar Pengeluaran</h3>
                  
                  {transactions.length === 0 ? (
                    <div className="bg-gray-50 rounded-md p-4 text-center text-gray-500">
                      Belum ada pengeluaran yang ditambahkan
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                      {transactions.map((transaction) => {
                        const category = categories.find((c) => c.id === transaction.category);
                        return (
                          <div
                            key={transaction.id}
                            className="bg-gray-50 rounded-md p-3 flex justify-between items-center"
                          >
                            <div>
                              <div className="flex items-center">
                                <span className="mr-2">{category?.icon}</span>
                                <p className="font-medium text-gray-800">{category?.name}</p>
                              </div>
                              <p className="text-red-500">{formatCurrency(transaction.amount)}</p>
                              <p className="text-xs text-gray-500">{transaction.description}</p>
                            </div>
                            <button
                              onClick={() => handleRemoveTransaction(transaction.id)}
                              className="text-red-500 hover:text-red-700"
                              aria-label="Hapus pengeluaran"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  {transactions.length > 0 && (
                    <div className="mt-4 p-3 bg-red-50 rounded-md">
                      <p className="font-medium text-gray-800">Total Pengeluaran:</p>
                      <p className="text-xl font-semibold text-red-500">
                        {formatCurrency(budgetSummary.totalExpenses)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button
                  onClick={goToPreviousStep}
                  className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-6 rounded-md transition-colors flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  Kembali
                </button>
                
                <button
                  onClick={goToNextStep}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-6 rounded-md transition-colors flex items-center"
                >
                  Lihat Analisis
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Analysis */}
          {currentStep === 3 && (
            <div className="space-y-6">
              {/* Budget Summary */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Ringkasan Anggaran Keluarga
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-teal-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Total Pendapatan</p>
                    <p className="text-2xl font-bold text-teal-600">
                      {formatCurrency(budgetSummary.totalIncome)}
                    </p>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Total Pengeluaran</p>
                    <p className="text-2xl font-bold text-red-500">
                      {formatCurrency(budgetSummary.totalExpenses)}
                    </p>
                  </div>
                  
                  <div className={`rounded-lg p-4 ${
                    budgetSummary.balance >= 0 ? "bg-blue-50" : "bg-red-50"
                  }`}>
                    <p className="text-sm text-gray-600">Sisa/Defisit</p>
                    <p className={`text-2xl font-bold ${
                      budgetSummary.balance >= 0 ? "text-blue-600" : "text-red-600"
                    }`}>
                      {formatCurrency(budgetSummary.balance)}
                    </p>
                  </div>
                </div>
                
                {/* Financial Health Status */}
                <div className="mt-6 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <h3 className="font-semibold text-gray-800">Status Kesehatan Keuangan:</h3>
                    <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${financialHealth.color}`}>
                      {financialHealth.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{financialHealth.message}</p>
                </div>
              </div>
              
              {/* Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Distribusi Pengeluaran
                  </h3>
                  <div className="h-64">
                    {transactions.length > 0 ? (
                      <Pie data={pieChartData} options={chartOptions} />
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-500">
                        Belum ada data pengeluaran
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Perbandingan Pendapatan & Pengeluaran
                  </h3>
                  <div className="h-64">
                    <Bar data={barChartData} options={chartOptions} />
                  </div>
                </div>
              </div>
              
              {/* Recommendations */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Rekomendasi untuk Keluarga Anda
                </h2>
                
                {recommendations.length > 0 ? (
                  <ul className="space-y-3">
                    {recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-teal-500 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-700">{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">
                    Masukkan data pendapatan dan pengeluaran untuk mendapatkan rekomendasi.
                  </p>
                )}
              </div>
              
              {/* Category Breakdown */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Rincian Pengeluaran per Kategori
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Kategori
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jumlah
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          % dari Pendapatan
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rekomendasi
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {categories.map((category) => {
                        const categoryTotal = transactions
                          .filter((t) => t.category === category.id)
                          .reduce((sum, t) => sum + t.amount, 0);
                        
                        const percentage = budgetSummary.totalIncome > 0
                          ? (categoryTotal / budgetSummary.totalIncome) * 100
                          : 0;
                        
                        let status = "Baik";
                        let statusColor = "text-green-600";
                        
                        if (percentage > category.recommended + 5) {
                          status = "Terlalu Tinggi";
                          statusColor = "text-red-600";
                        } else if (percentage < category.recommended - 5 && category.id === "tabungan") {
                          status = "Terlalu Rendah";
                          statusColor = "text-yellow-600";
                        }
                        
                        return (
                          <tr key={category.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <span className="mr-2">{category.icon}</span>
                                <span className="font-medium text-gray-800">{category.name}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                              {formatCurrency(categoryTotal)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                              {percentage.toFixed(1)}%
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                              {category.recommended}%
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor} bg-opacity-10`}>
                                {status}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Savings Projection */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Proyeksi Tabungan
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Tabungan per Bulan</p>
                    <p className="text-xl font-bold text-teal-600">
                      {formatCurrency(budgetSummary.balance > 0 ? budgetSummary.balance : 0)}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Tabungan per Tahun</p>
                    <p className="text-xl font-bold text-teal-600">
                      {formatCurrency(budgetSummary.balance > 0 ? budgetSummary.balance * 12 : 0)}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Tingkat Tabungan</p>
                    <p className="text-xl font-bold text-teal-600">
                      {budgetSummary.savingsRate.toFixed(1)}%
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Potensi Tabungan dalam 5 Tahun</h3>
                  <p className="text-gray-700 mb-4">
                    Dengan tingkat tabungan saat ini, dalam 5 tahun Anda berpotensi mengumpulkan:
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatCurrency(budgetSummary.balance > 0 ? budgetSummary.balance * 12 * 5 : 0)}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    * Proyeksi ini belum memperhitungkan inflasi dan potensi investasi
                  </p>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex justify-between">
                <button
                  onClick={goToPreviousStep}
                  className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-6 rounded-md transition-colors flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  Kembali ke Pengeluaran
                </button>
                
                <div className="space-x-3">
                  <button
                    onClick={() => {
                      // In a real app, this would save the budget to a database
                      alert("Fitur simpan akan tersedia segera!");
                    }}
                    className="border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-2.5 px-6 rounded-md transition-colors"
                  >
                    Simpan Anggaran
                  </button>
                  
                  <button
                    onClick={() => {
                      // In a real app, this would generate a PDF report
                      alert("Fitur unduh laporan akan tersedia segera!");
                    }}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-6 rounded-md transition-colors flex items-center mt-3"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                    Unduh Laporan
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Tips and Education */}
          <div className="mt-10 bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tips Pengelolaan Keuangan Keluarga
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-teal-100 p-2 rounded-full mr-3">
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-800">Aturan 50/30/20</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Alokasikan 50% pendapatan untuk kebutuhan, 30% untuk keinginan, dan 20% untuk tabungan dan investasi.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-teal-100 p-2 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-800">Dana Darurat</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Siapkan dana darurat setara 3-6 bulan pengeluaran untuk menghadapi situasi tidak terduga.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-teal-100 p-2 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-800">Catat Pengeluaran</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Selalu catat setiap pengeluaran, sekecil apapun, untuk memahami pola belanja keluarga Anda.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link
                  href="/edukasi-keluarga"
                  className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center"
                >
                  Pelajari lebih lanjut tentang pengelolaan keuangan keluarga
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  