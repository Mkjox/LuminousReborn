"use client"; // This marks the component as a client component

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function ContactPage() {
  return (
    <>
      <Breadcrumb className="m-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            /
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <main className="container mx-auto py-5">
        {/* Contact Us Section */}
        <section className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 dark:text-gray-200">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-500">
            We&apos;d love to hear from you! Whether you have a question, suggestion,
            or just want to say hello, reach out to us, and we&apos;ll get back to you
            as soon as possible.
          </p>
        </section>

        {/* Contact Form Section */}
        <section>
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-600">
                  Send Us a Message
                </h3>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-gray-600 dark:text-gray-300">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        className="w-full mt-2"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-gray-600 dark:text-gray-300">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full mt-2"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-gray-600 dark:text-gray-300">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here"
                      rows={6}
                      className="w-full mt-2"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    variant="outline"
                    className="w-full text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white dark:text-gray-600"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Thank you for your message! We'll get back to you soon.");
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Location Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 dark:text-gray-200">Our Location</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6 dark:text-gray-500">
            You can find us at our headquarters in the heart of the city. Visit us
            for a chat or drop by to learn more about our work.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.98452762718!2d-74.25986589999999!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDUwJzAwLjAiTiA3NMKwMTYnNDQuNyJX!5e0!3m2!1sen!2sus!4v1674698810282!5m2!1sen!2sus"
            className="w-full h-64 rounded-lg shadow-lg"
            loading="lazy"
          ></iframe>
        </section>
      </main>
    </>
  );
}
