import { ArrowRight } from "lucide-react";
import { Button, Card, VStack } from "rsuite";

function Share() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:mx-12">
        {/* // Card component with the image and brief description of the Brief
      Section. */}
        <Card className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-center ">
          <img src="./public/collab.png" alt="Diagram sharing" />
          <VStack
            spacing={2}
            className="flex flex-col items-center justify-center mb-4 md:mb-0"
          >
            <Card.Header
              as="h4"
              className="text-3xl md:text-4xl text-primary text-center mx-auto mb-4 
            md:mx-0
            md:text-start md:leading-relaxed font-bold md:mb-8 "
            >
              It’s all about {<br />} organization
            </Card.Header>

            <Card.Body>
              <p
                className="text-sm
            text-center text-wrap 
            md:text-start
            md:text-lg mb-4 md:mb-8"
              >
                Collaborate with your team and track the progress of every
                project on a single dashboard. You can organize your tasks by
                dragging them around or setting up an editorial calendar for
                future planning.
              </p>
              <Button
                appearance="primary"
                className="w-42 flex gap-4 mx-auto text-primary md:mx-0 md:justify-start"
              >
                Learn more <ArrowRight />
              </Button>
            </Card.Body>
          </VStack>
        </Card>
      </div>
    </div>
  );
}

export default Share;
