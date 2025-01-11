import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"; // Adjusted import path
import { Input } from "@/components/ui/input";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Textarea } from "./components/ui/textarea";
import { Calendar } from "./components/ui/calendar";
import { useState } from "react";

export function AddButton() {
    const [selectedDate, setSelectedDate] = useState(null);
    const Forms = useForm(); // Initialize react-hook-form


    const onSubmit = (data: any) => {
        console.log(data); // Handle form data
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogDescription className=" sr-only ">
                    Fill This Form
                </DialogDescription>
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                </DialogHeader>
                <Form {...Forms}>
                    <form onSubmit={Forms.handleSubmit(onSubmit)}>
                        <FormField
                            control={Forms.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            value={field.value || ""}
                                            placeholder="Enter task title"
                                            required
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className=" mt-5 ">
                            <FormField
                                control={Forms.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                value={field.value || ""}
                                                placeholder="Enter task Description"
                                                required
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className=" mt-5 ">
                            <FormField
                                control={Forms.control}
                                name="dueTime"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>DueTime</FormLabel>
                                        <FormControl>
                                            <Calendar
                                                mode="single"
                                                selected={field.value || selectedDate}
                                                onSelect={(date: any) => {
                                                    setSelectedDate(date);
                                                    field.onChange(date); // Update the form value
                                                }}
                                                className="rounded-md border shadow"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className=" mt-5 ">
                            <DialogFooter>
                                <Button type="submit">Save Task</Button>
                            </DialogFooter>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
