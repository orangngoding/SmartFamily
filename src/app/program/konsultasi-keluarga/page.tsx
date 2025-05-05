"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../home-component/navbar";
import Footer from "../../home-component/footer";

export default function KonsultasiKeluarga() {
  
  
  // State for multi-step form
  const [currentStep, setCurrentStep] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    // Personal information
    name: "",
    email: "",
    phone: "",
    familyMembers: "2",
    
    // Consultation details
    consultationType: "",
    consultationTopic: "",
    urgencyLevel: "normal",
    preferredDate: "",
    preferredTime: "",
    
    // Problem description
    problemDescription: "",
    previousSolutions: "",
    expectations: "",
    
    // Consent
    agreeToTerms: false,
  });
  
  // Available consultation slots
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  
  // Consultation types
  const consultationTypes = [
    {
      id: "keuangan",
      title: "Konsultasi Keuangan Keluarga",
      icon: "💰",
      description: "Perencanaan anggaran, investasi, dan pengelolaan keuangan keluarga",
    },
    {
      id: "pendidikan",
      title: "Konsultasi Pendidikan Anak",
      icon: "📚",
      description: "Strategi pendidikan, pemilihan sekolah, dan pengembangan potensi anak",
    },
    {
      id: "hubungan",
      title: "Konsultasi Hubungan Keluarga",
      icon: "❤️",
      description: "Komunikasi keluarga, penyelesaian konflik, dan penguatan ikatan keluarga",
    },
    {
      id: "parenting",
      title: "Konsultasi Parenting",
      icon: "👨‍👩‍👧‍👦",
      description: "Pola asuh, tantangan pengasuhan, dan pengembangan karakter anak",
    },
  ];
  
  // Topics based on consultation type
  const topicsByType: Record<string, string[]> = {
    keuangan: [
      "Perencanaan anggaran keluarga",
      "Strategi menabung untuk pendidikan anak",
      "Investasi untuk masa depan keluarga",
      "Mengelola hutang keluarga",
      "Perencanaan pensiun",
      "Dana darurat keluarga",
    ],
    pendidikan: [
      "Memilih sekolah yang tepat",
      "Mendampingi anak belajar di rumah",
      "Mengembangkan minat dan bakat anak",
      "Mengatasi kesulitan belajar",
      "Pendidikan karakter",
      "Perencanaan pendidikan tinggi",
    ],
    hubungan: [
      "Komunikasi efektif dalam keluarga",
      "Menyelesaikan konflik keluarga",
      "Memperkuat hubungan suami-istri",
      "Hubungan dengan keluarga besar",
      "Work-life balance",
      "Membangun tradisi keluarga",
    ],
    parenting: [
      "Pola asuh yang tepat",
      "Menangani tantrum pada anak",
      "Mendidik anak di era digital",
      "Membangun kemandirian anak",
      "Pendidikan seksual untuk anak",
      "Mengajarkan nilai dan etika",
    ],
  };
  
  // Consultant data
  const consultants = [
    {
      id: 1,
      name: "Dr. Rina Wijaya, M.Psi",
      specialty: "Psikolog Keluarga",
      experience: "15 tahun",
      photo: "/images/consultant-1.jpg",
      availability: ["Senin", "Rabu", "Jumat"],
    },
    {
      id: 2,
      name: "Ahmad Faisal, CFP",
      specialty: "Perencana Keuangan Keluarga",
      experience: "10 tahun",
      photo: "/images/consultant-2.jpg",
      availability: ["Selasa", "Kamis", "Sabtu"],
    },
    {
      id: 3,
      name: "Dra. Siti Nurhaliza, M.Pd",
      specialty: "Konsultan Pendidikan",
      experience: "12 tahun",
      photo: "/images/consultant-3.jpg",
      availability: ["Senin", "Selasa", "Kamis"],
    },
    {
      id: 4,
      name: "Budi Santoso, M.Psi",
      specialty: "Konselor Parenting",
      experience: "8 tahun",
      photo: "/images/consultant-4.jpg",
      availability: ["Rabu", "Jumat", "Sabtu"],
    },
  ];
  
  // Selected consultant
  const [selectedConsultant, setSelectedConsultant] = useState<number | null>(null);
  
  // Generate available time slots based on selected date
  useEffect(() => {
    if (formData.preferredDate) {
      const day = new Date(formData.preferredDate).toLocaleDateString('id-ID', { weekday: 'long' });
        
      // Filter consultants based on selected day
      const availableConsultants = consultants.filter(consultant =>
        consultant.availability.includes(day)
      );
        
      if (availableConsultants.length > 0) {
        // Generate time slots from 9 AM to 4 PM
        const slots = [];
        for (let hour = 9; hour <= 16; hour++) {
          slots.push(`${hour}:00`);
          if (hour < 16) {
            slots.push(`${hour}:30`);
          }
        }
        setAvailableSlots(slots);
      } else {
        setAvailableSlots([]);
      }
        
      // Update state to only show consultants available on the selected day
      setFilteredConsultants(availableConsultants);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.preferredDate]); // Only depend on formData.preferredDate
  
  // State for filtered consultants
  const [filteredConsultants, setFilteredConsultants] = useState(consultants);
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Reset consultation topic when consultation type changes
    if (name === 'consultationType') {
      setFormData(prev => ({
        ...prev,
        consultationTopic: ""
      }));
    }
  };
  
  // Handle consultant selection
  const handleSelectConsultant = (id: number) => {
    setSelectedConsultant(id);
  };
  
  // Navigate to next step
  const goToNextStep = () => {
    window.scrollTo(0, 0);
    setCurrentStep(prev => prev + 1);
  };
  
  // Navigate to previous step
  const goToPreviousStep = () => {
    window.scrollTo(0, 0);
    setCurrentStep(prev => prev - 1);
  };
  
  // Check if current step is valid
  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.name.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.phone.trim() !== ""
        );
      case 2:
        return (
          formData.consultationType !== "" &&
          formData.consultationTopic !== "" &&
          formData.preferredDate !== "" &&
          formData.preferredTime !== ""
        );
      case 3:
        return (
          formData.problemDescription.trim() !== "" &&
          formData.expectations.trim() !== ""
        );
      case 4:
        return selectedConsultant !== null;
      case 5:
        return formData.agreeToTerms;
      default:
        return false;
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      
      // In a real app, this would send data to the backend
      console.log("Form submitted:", {
        ...formData,
        consultantId: selectedConsultant
      });
      
      // Reset form after submission (in a real app, this might redirect to a success page)
      setTimeout(() => {
        setCurrentStep(6);
      }, 1000);
    }, 1500);
  };
  
  // Get selected consultant data
  const getSelectedConsultantData = () => {
    return consultants.find(c => c.id === selectedConsultant);
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Konsultasi Keluarga
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jadwalkan konsultasi dengan pakar keluarga kami untuk mendapatkan solusi terbaik
              untuk keluarga Anda. Kami siap membantu dalam berbagai aspek kehidupan keluarga.
            </p>
          </div>
          
          {/* Progress Bar */}
          {currentStep < 6 && (
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {["Informasi Pribadi", "Detail Konsultasi", "Deskripsi Masalah", "Pilih Konsultan", "Konfirmasi"].map((step, index) => (
                  <div 
                    key={index} 
                    className={`text-xs md:text-sm font-medium ${
                      currentStep > index + 1 ? "text-teal-600" : 
                      currentStep === index + 1 ? "text-teal-600" : "text-gray-400"
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-teal-600 h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${(currentStep / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
          
          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Langkah 1: Informasi Pribadi
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Masukkan nama lengkap Anda"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        placeholder="contoh@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Nomor Telepon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        placeholder="08xxxxxxxxxx"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="familyMembers" className="block text-sm font-medium text-gray-700 mb-1">
                        Jumlah Anggota Keluarga
                      </label>
                      <select
                        id="familyMembers"
                        name="familyMembers"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        value={formData.familyMembers}
                        onChange={handleInputChange}
                      >
                                               {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num.toString()}>
                            {num} orang
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <span className="font-medium">Catatan:</span> Informasi pribadi Anda akan dijaga kerahasiaannya dan hanya digunakan untuk keperluan konsultasi.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={goToNextStep}
                    disabled={!isCurrentStepValid()}
                    className={`px-6 py-2 rounded-md text-white font-medium ${
                      isCurrentStepValid()
                        ? "bg-teal-600 hover:bg-teal-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Lanjutkan
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Consultation Details */}
            {currentStep === 2 && (
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Langkah 2: Detail Konsultasi
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Jenis Konsultasi <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {consultationTypes.map((type) => (
                        <div
                          key={type.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            formData.consultationType === type.id
                              ? "border-teal-500 bg-teal-50"
                              : "border-gray-200 hover:border-teal-300"
                          }`}
                          onClick={() =>
                            handleInputChange({
                              target: {
                                name: "consultationType",
                                value: type.id,
                                type: "text",
                              },
                            } as React.ChangeEvent<HTMLInputElement>)
                          }
                        >
                          <div className="flex items-start">
                            <span className="text-2xl mr-3">{type.icon}</span>
                            <div>
                              <h3 className="font-medium text-gray-800">
                                {type.title}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {type.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {formData.consultationType && (
                    <div>
                      <label htmlFor="consultationTopic" className="block text-sm font-medium text-gray-700 mb-1">
                        Topik Konsultasi <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="consultationTopic"
                        name="consultationTopic"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        value={formData.consultationTopic}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Pilih topik konsultasi</option>
                        {topicsByType[formData.consultationType]?.map((topic) => (
                          <option key={topic} value={topic}>
                            {topic}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Tanggal Konsultasi <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Waktu Konsultasi <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        disabled={availableSlots.length === 0}
                      >
                        <option value="">Pilih waktu</option>
                        {availableSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {formData.preferredDate && availableSlots.length === 0 && (
                        <p className="text-red-500 text-sm mt-1">
                          Tidak ada konsultan yang tersedia pada tanggal ini. Silakan pilih tanggal lain.
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="urgencyLevel" className="block text-sm font-medium text-gray-700 mb-1">
                        Tingkat Urgensi
                      </label>
                      <select
                        id="urgencyLevel"
                        name="urgencyLevel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        value={formData.urgencyLevel}
                        onChange={handleInputChange}
                      >
                        <option value="low">Rendah - Hanya konsultasi umum</option>
                        <option value="normal">Normal - Ada beberapa masalah yang perlu diselesaikan</option>
                        <option value="high">Tinggi - Membutuhkan solusi segera</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={goToPreviousStep}
                    className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
                  >
                    Kembali
                  </button>
                  <button
                    type="button"
                    onClick={goToNextStep}
                    disabled={!isCurrentStepValid()}
                    className={`px-6 py-2 rounded-md text-white font-medium ${
                      isCurrentStepValid()
                        ? "bg-teal-600 hover:bg-teal-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Lanjutkan
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Problem Description */}
            {currentStep === 3 && (
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Langkah 3: Deskripsi Masalah
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="problemDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Deskripsi Masalah <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="problemDescription"
                      name="problemDescription"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Jelaskan masalah atau situasi yang ingin Anda konsultasikan..."
                      value={formData.problemDescription}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                    <p className="text-sm text-gray-500 mt-1">
                      Semakin detail penjelasan Anda, semakin baik konsultan dapat membantu Anda.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="previousSolutions" className="block text-sm font-medium text-gray-700 mb-1">
                      Solusi yang Sudah Dicoba
                    </label>
                    <textarea
                      id="previousSolutions"
                      name="previousSolutions"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Jika ada, jelaskan solusi apa yang sudah Anda coba sebelumnya..."
                      value={formData.previousSolutions}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-1">
                      Harapan dari Konsultasi <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="expectations"
                      name="expectations"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Apa yang Anda harapkan dari konsultasi ini?"
                      value={formData.expectations}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={goToPreviousStep}
                    className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
                  >
                    Kembali
                  </button>
                  <button
                    type="button"
                    onClick={goToNextStep}
                    disabled={!isCurrentStepValid()}
                    className={`px-6 py-2 rounded-md text-white font-medium ${
                      isCurrentStepValid()
                        ? "bg-teal-600 hover:bg-teal-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Lanjutkan
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Choose Consultant */}
            {currentStep === 4 && (
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Langkah 4: Pilih Konsultan
                </h2>

                <p className="text-gray-600 mb-6">
                  Pilih konsultan yang sesuai dengan kebutuhan Anda. Semua konsultan kami memiliki keahlian dan pengalaman yang terbukti.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {filteredConsultants.map((consultant) => (
                    <div
                        key={consultant.id}
                        className={`border rounded-lg overflow-hidden transition-all ${
                        selectedConsultant === consultant.id
                            ? "border-teal-500 ring-2 ring-teal-200"
                            : "border-gray-200 hover:border-teal-300"
                        }`}
                        onClick={() => handleSelectConsultant(consultant.id)}
                    >
                        <div className="p-4 flex flex-col sm:flex-row gap-4">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 mx-auto sm:mx-0">
                            {/* Placeholder for consultant photo */}
                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            </div>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                            <h3 className="font-semibold text-lg text-gray-800">{consultant.name}</h3>
                            <p className="text-teal-600 font-medium">{consultant.specialty}</p>
                            <p className="text-gray-600 text-sm mt-1">Pengalaman: {consultant.experience}</p>
                            <div className="mt-2">
                            <p className="text-sm text-gray-600">Tersedia pada:</p>
                            <div className="flex flex-wrap gap-1 mt-1 justify-center sm:justify-start">
                                {consultant.availability.map((day) => (
                                <span key={day} className="inline-block px-2 py-1 text-xs bg-teal-100 text-teal-800 rounded">
                                    {day}
                                </span>
                                ))}
                            </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center sm:justify-end">
                            <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${
                            selectedConsultant === consultant.id
                                ? "border-teal-500 bg-teal-500"
                                : "border-gray-300"
                            }`}>
                            {selectedConsultant === consultant.id && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                </svg>
                            )}
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Perhatian</h3>
                      <div className="mt-1 text-sm text-yellow-700">
                        <p>Ketersediaan konsultan dapat berubah. Kami akan mengonfirmasi jadwal konsultasi Anda setelah pengajuan.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={goToPreviousStep}
                    className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
                  >
                    Kembali
                  </button>
                  <button
                    type="button"
                    onClick={goToNextStep}
                    disabled={!isCurrentStepValid()}
                    className={`px-6 py-2 rounded-md text-white font-medium ${
                      isCurrentStepValid()
                        ? "bg-teal-600 hover:bg-teal-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Lanjutkan
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Langkah 5: Konfirmasi Konsultasi
                </h2>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Ringkasan Konsultasi</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Informasi Pribadi</h4>
                      <p className="mt-1 text-gray-800">{formData.name}</p>
                      <p className="text-gray-800">{formData.email}</p>
                      <p className="text-gray-800">{formData.phone}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Detail Konsultasi</h4>
                      <p className="mt-1 text-gray-800">
                        {consultationTypes.find(t => t.id === formData.consultationType)?.title}
                      </p>
                      <p className="text-gray-800">{formData.consultationTopic}</p>
                      <p className="text-gray-800">
                        {formatDate(formData.preferredDate)}, Pukul {formData.preferredTime}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Konsultan</h4>
                      {getSelectedConsultantData() && (
                        <div className="mt-1 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-800">{getSelectedConsultantData()?.name}</p>
                            <p className="text-sm text-gray-600">{getSelectedConsultantData()?.specialty}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                        Saya menyetujui syarat dan ketentuan
                      </label>
                      <p className="text-gray-500">
                        Dengan mencentang kotak ini, Anda menyetujui{" "}
                        <a href="#" className="text-teal-600 hover:text-teal-500">
                          syarat dan ketentuan
                        </a>{" "}
                        serta{" "}
                        <a href="#" className="text-teal-600 hover:text-teal-500">
                          kebijakan privasi
                        </a>{" "}
                        kami.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={goToPreviousStep}
                    className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
                  >
                    Kembali
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={!isCurrentStepValid() || isLoading}
                    className={`px-6 py-2 rounded-md text-white font-medium flex items-center ${
                      isCurrentStepValid() && !isLoading
                        ? "bg-teal-600 hover:bg-teal-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Memproses...
                      </>
                    ) : (
                      "Konfirmasi Konsultasi"
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Step 6: Success */}
            {currentStep === 6 && (
              <div className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Konsultasi Berhasil Dijadwalkan!
                </h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Terima kasih telah menjadwalkan konsultasi keluarga. Kami telah mengirimkan detail konsultasi ke email Anda.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto mb-6 text-left">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Detail Konsultasi</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Jenis Konsultasi</p>
                      <p className="font-medium text-gray-800">
                        {consultationTypes.find(t => t.id === formData.consultationType)?.title}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Jadwal</p>
                      <p className="font-medium text-gray-800">
                        {formatDate(formData.preferredDate)}, Pukul {formData.preferredTime}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Konsultan</p>
                      <p className="font-medium text-gray-800">
                        {getSelectedConsultantData()?.name}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">ID Konsultasi</p>
                      <p className="font-medium text-gray-800">
                        KF-{Math.floor(100000 + Math.random() * 900000)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="#"
                    onClick={(e) => {
                        e.preventDefault(); // Mencegah navigasi default
                        alert("Fitur belum tersedia. Mohon tunggu update berikutnya!");
                    }}
                    className="px-6 py-2 rounded-md bg-teal-600 text-white font-medium hover:bg-teal-700"
                    >
                    Lihat di Dashboard
                </Link>
                  <Link
                    href="/"
                    className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
                  >
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Additional Information */}
          {currentStep < 6 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Mengapa Memilih Konsultasi Keluarga Kami?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Konsultan Berpengalaman</h4>
                  <p className="text-gray-600">
                    Tim konsultan kami terdiri dari para profesional dengan pengalaman bertahun-tahun di bidangnya masing-masing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Jadwal Fleksibel</h4>
                  <p className="text-gray-600">
                    Kami menawarkan jadwal konsultasi yang fleksibel untuk menyesuaikan dengan kesibukan Anda.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Privasi Terjamin</h4>
                  <p className="text-gray-600">
                    Kami menjamin kerahasiaan informasi pribadi dan detail konsultasi Anda sesuai dengan standar privasi tertinggi.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {currentStep < 6 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Pertanyaan yang Sering Diajukan
              </h3>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-4 bg-white">
                      <span>Berapa lama durasi satu sesi konsultasi?</span>
                      <span className="transition group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-600">
                        Satu sesi konsultasi berlangsung selama 60 menit. Jika diperlukan, Anda dapat memperpanjang sesi atau menjadwalkan sesi lanjutan.
                      </p>
                    </div>
                  </details>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-4 bg-white">
                      <span>Apakah konsultasi dapat dilakukan secara online?</span>
                      <span className="transition group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-600">
                        Ya, kami menawarkan konsultasi baik secara tatap muka maupun online melalui video call. Anda dapat memilih metode yang paling nyaman untuk Anda.
                      </p>
                    </div>
                  </details>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-4 bg-white">
                      <span>Bagaimana jika saya perlu membatalkan atau menjadwalkan ulang konsultasi?</span>
                      <span className="transition group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-600">
                        Anda dapat membatalkan atau menjadwalkan ulang konsultasi hingga 24 jam sebelum jadwal yang telah ditentukan tanpa biaya tambahan. Pembatalan kurang dari 24 jam mungkin dikenakan biaya.
                      </p>
                    </div>
                  </details>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-4 bg-white">
                      <span>Berapa biaya untuk satu sesi konsultasi?</span>
                      <span className="transition group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-600">
                        Biaya konsultasi bervariasi tergantung pada jenis konsultasi dan konsultan yang dipilih. Informasi biaya akan ditampilkan setelah Anda memilih jenis konsultasi dan konsultan. Kami juga menawarkan paket konsultasi dengan harga yang lebih terjangkau.
                      </p>
                    </div>
                  </details>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-4 bg-white">
                      <span>Apakah saya bisa mengajak anggota keluarga lain dalam sesi konsultasi?</span>
                      <span className="transition group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-600">
                        Tentu saja! Kami sangat mendorong partisipasi anggota keluarga yang relevan dalam sesi konsultasi. Hal ini dapat membantu konsultan memahami dinamika keluarga dengan lebih baik dan memberikan solusi yang lebih komprehensif.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
