import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Brain, Trophy, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
    <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="m-4">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
    <div className="grid grid-rows items-center justify-items-center p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <div className="main-content">
                <div className="space-y-8 mt-5">
                    <section className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Welcome to Luminous
                        </h1>
                        <p className="mt-4 text-xl font-semibold text-muted-foreground">
                            Challenge yourself, unite your mind and body!
                        </p>
                    </section>

                    <div className="text-center">
                        <Button>Start a Quiz</Button>
                    </div>

                    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 place-self-center">
                        <Card className="card flex flex-col items-center justify-center text-center">
                            <Trophy className="h-8 w-8 text-primary mb-2" />
                            <CardTitle className="m-2">Compete</CardTitle>
                            <CardDescription className="m-2">
                                Challenge friends and climb the leaderboard
                            </CardDescription>
                        </Card>

                        <Card className="card flex flex-col items-center justify-center text-center">
                            <Brain className="h-8 w-8 text-primary mb-2" />
                            <CardTitle className="m-2">Learn</CardTitle>
                            <CardDescription className="m-2">
                                Expand your knowledge across various topics
                            </CardDescription>
                        </Card>

                        <Card className="card flex flex-col items-center justify-center text-center">
                            <Users className="h-8 w-8 text-primary mb-2" />
                            <CardTitle className="m-2">Connect</CardTitle>
                            <CardDescription className="m-2">
                                Join a community of enthusiasts
                            </CardDescription>
                        </Card>

                        <Card className="card flex flex-col items-center justify-center text-center p-10">
                            <Zap className="h-8 w-8 text-primary mb-2" />
                            <CardTitle className="m-2">Improve</CardTitle>
                            <CardDescription className="m-2">
                                Track your progress and boost your skills
                            </CardDescription>
                        </Card>
                    </section>

                    {/* <section>
                        <h2 className="font-semibold text-3xl text-muted-foreground">Featured Quizzes</h2>
                    </section> */}
                </div>
            </div>
    </div>
    </>
  );
}
