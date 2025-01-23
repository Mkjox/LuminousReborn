"use client"; // This marks the component as a client component

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function AboutPage() {
  return (
    <>
      <Breadcrumb className="m-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="breadcrumb">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            /
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/about" className="breadcrumb">About</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="container mx-auto p-4">
        {/* Section for About Us */}

        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg mb-6 text-center">
          <h1 className="text-5xl font-bold mb-2">About Us</h1>
          <p className="text-xl">Inspiring individuals through knowledge, mindfulness, and community.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">Our mission is to empower individuals to achieve personal growth and enlightenment through shared knowledge and community support.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center text-center">
            <Card className="p-4 transition-transform transform hover:scale-105">
              <CardTitle className="font-bold text-lg">Jane Doe</CardTitle>
              <CardHeader>Founder & Content Creator</CardHeader>
              <CardContent className="text-gray-600">A lifelong learner passionate about mindfulness and sustainable living.</CardContent>
            </Card>
            <Card className="p-4 transition-transform transform hover:scale-105">
              <CardTitle className="font-bold text-lg">John Smith</CardTitle>
              <CardHeader>Community Manager</CardHeader>
              <CardContent className="text-gray-600">Dedicated to building a supportive community and fostering connections.</CardContent>
            </Card>
          </div>
        </div>
        <div className="text-center mt-6">
          <Button className="bg-blue-500 text-white hover:bg-blue-600">Join our Journey</Button>
        </div>
      </main>
    </>
  );
}
