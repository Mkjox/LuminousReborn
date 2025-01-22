"use client"; // This marks the component as a client component

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-8">
      {/* Section for About Us */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          At Luminous, we are passionate about building exceptional digital
          experiences. Our mission is to create innovative solutions that empower
          individuals and businesses worldwide.
        </p>
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-600">
              We strive to be a leader in the tech space, constantly pushing the
              boundaries of what is possible through technology.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section for Our Journey */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Journey</h2>
        <p className="text-gray-600 mb-6">
          Luminous started as a small team of enthusiasts who believed in the
          transformative power of technology. Over the years, we&apos;ve grown into
          a community of developers, designers, and innovators dedicated to
          delivering cutting-edge solutions.
        </p>
        <Card className="w-full max-w-4xl mx-auto">
          <CardContent>
            <p className="text-lg text-gray-600">
              Our journey has been shaped by innovation, challenges, and a
              relentless pursuit of excellence. We&apos;ve worked on projects that
              span various industries and have seen remarkable transformations
              through technology.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section for Our Team */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <div className="flex justify-center gap-8">
          <Avatar
            className="w-24 h-24 border-2 border-gray-300"
            src="/team-member-1.jpg"
            alt="Team Member 1"
          />
          <Avatar
            className="w-24 h-24 border-2 border-gray-300"
            src="/team-member-2.jpg"
            alt="Team Member 2"
          />
          <Avatar
            className="w-24 h-24 border-2 border-gray-300"
            src="/team-member-3.jpg"
            alt="Team Member 3"
          />
        </div>
        <p className="text-center text-gray-600 mt-4">Meet our talented team!</p>
      </section>

      {/* Section for Contact */}
      <section className="mt-12 text-center">
        <Button
          variant="outline"
          className="text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white"
          onClick={() => alert("Thank you for reaching out!")}
        >
          Get in Touch
        </Button>
      </section>
    </main>
  );
}
