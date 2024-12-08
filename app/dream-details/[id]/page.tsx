import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function DreamDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dream Name</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardHeader>Description and Goals</CardHeader>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This is where the full description of the dream goes. It should include all the details about what the dreamer hopes to achieve and why it's important to them.
              </p>
              <h3 className="font-semibold mb-2">Goals:</h3>
              <ul className="list-disc list-inside">
                <li>Goal 1</li>
                <li>Goal 2</li>
                <li>Goal 3</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardHeader>Progress</CardHeader>
            </CardHeader>
            <CardContent>
              <Progress value={33} className="w-full" />
              <p className="text-center mt-2">33% Complete</p>
            </CardContent>
          </Card>

          <div className="flex space-x-4 mb-8">
            <Button size="lg">Donate</Button>
            <Button size="lg" variant="outline">Become a Mentor</Button>
          </div>

          <Card>
            <CardHeader>
              <CardHeader>Mentor Comments</CardHeader>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">Great progress! Keep it up!</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">Jane Smith</p>
                    <p className="text-sm text-gray-500">Have you considered trying this approach?</p>
                  </div>
                </div>
              </div>
              <Textarea className="mt-4" placeholder="Add your comment..." />
              <Button className="mt-2">Post Comment</Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card className="mb-8">
            <CardHeader>
              <CardHeader>Current Mentors</CardHeader>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>M1</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Mentor 1</p>
                    <p className="text-sm text-gray-500">Expertise: Web Development</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>M2</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Mentor 2</p>
                    <p className="text-sm text-gray-500">Expertise: Marketing</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardHeader>Top Donors</CardHeader>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>D1</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Donor 1</p>
                    <p className="text-sm text-gray-500">Amount: $500</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>D2</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Donor 2</p>
                    <p className="text-sm text-gray-500">Amount: $350</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

