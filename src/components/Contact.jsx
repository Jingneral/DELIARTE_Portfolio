import React from "react";
import { Mail, Phone, MapPin, Facebook, Github, Music2 } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Feel free to reach out through the form or connect with me on social media.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE — CONTACT FORM */}
          <div className="bg-white p-10 shadow-lg rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label className="text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Message</label>
                <textarea
                  rows="4"
                  className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE — SOCIAL MEDIA & CONTACT INFO */}
          <div className="flex flex-col gap-8">

            {/* EMAIL */}
            <div className="bg-white shadow-lg p-8 rounded-2xl border border-gray-200 flex items-center gap-6 hover:shadow-2xl transition">
              <Mail className="w-14 h-14 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-600">gc.deliarte@gmail.com</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="bg-white shadow-lg p-8 rounded-2xl border border-gray-200 flex items-center gap-6 hover:shadow-2xl transition">
              <Phone className="w-14 h-14 text-green-600" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-600">+63 963 123 2891</p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="bg-white shadow-lg p-8 rounded-2xl border border-gray-200 flex items-center gap-6 hover:shadow-2xl transition">
              <MapPin className="w-14 h-14 text-red-600" />
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-600">Diatagon, Lianga, Surigao del Sur, Philippines</p>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="bg-white shadow-lg p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-5">Connect with Me</h3>

              <div className="flex flex-col gap-5">

                <a
                  href="https://www.facebook.com/gcarlo.deliarte.0824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition"
                >
                  <Facebook className="w-12 h-12" />
                  <span className="text-lg font-medium">Facebook</span>
                </a>

                <a
                  href="https://github.com/Jingneral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 hover:text-black transition"
                >
                  <Github className="w-12 h-12" />
                  <span className="text-lg font-medium">GitHub</span>
                </a>

                <a
                  href="https://www.tiktok.com/@jingneral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 hover:text-pink-600 transition"
                >
                  <Music2 className="w-12 h-12" />
                  <span className="text-lg font-medium">TikTok</span>
                </a>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
