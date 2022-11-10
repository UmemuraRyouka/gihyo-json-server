import { Badge } from "@mui/material";

{badgeContent && (
  <BadgeWrapper data-testid="badge-wrapper">
    <Badge
      content={`${badgeConten}`}
      backgroundColor={badgeBackgroundColor}
    />
  </BadgeWrapper>
)}