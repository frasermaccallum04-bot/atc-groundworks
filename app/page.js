
'use client'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <nav className="container" style={{display:'flex',justifyContent:'space-between'}}>
        <h2>ATC Groundworks</h2>
        <div>
          <a href="#services">Services</a> | <a href="#projects">Projects</a> | <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="section">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} style={{fontSize:'40px'}}>
          Built on Precision & Trust
        </motion.h1>
        <p>Serving Argyll & Bute and Perthshire</p>
        <div>
          <a className="button">Get a Quote</a>
        </div>
      </section>

      <section id="services" className="section">
        <h2>Services</h2>
        <div className="grid grid-3">
          {["Groundworks","Drainage","Block Paving","Landscaping","Garden Renovations","Joinery"].map(s=>(
            <div key={s} className="card">{s}</div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Recent Work</h2>
        <div className="grid grid-3">
          {[1,2,3].map(i=>(
            <div key={i} className="card">Add Photo</div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>07796124371</p>
      </section>
    </div>
  )
}
