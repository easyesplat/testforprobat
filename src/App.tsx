"use client";
import { ProbatProviderClient } from "@probat/react";
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <ProbatProviderClient>
      <div className="App">
        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
    </ProbatProviderClient>
  )
}

export default App
