import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TutorialDialog = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
      <DialogContent className={"max-w-[1000px]"}>
        <DialogHeader>
          <DialogTitle className="hidden"></DialogTitle>
          <DialogDescription>
            {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Zb2kBjp2m4I?si=ngqdMyOSFjIxytFD&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-md aspect-video"
            ></iframe> */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NS0TGy8A_tU?si=1HJkBHeiPFosz38d"
              title="Animation Addons for Elementor – The Ultimate GSAP Animation Plugin"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="rounded-md aspect-video"
            ></iframe>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TutorialDialog;
