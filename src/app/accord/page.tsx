import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordPage() {
    return (
        <div className="flex justify-center items-center h-full">
            <main className="w-[500px] p-4">
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Newly added - Is it still accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It works !
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        </main>
        </div>
    )
}
