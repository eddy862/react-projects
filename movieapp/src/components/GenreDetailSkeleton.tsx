import React from "react";
import Skeleton from "@mui/material/Skeleton";

type Props = {};

const GenreDetailSkeleton: React.FC = ({}: Props) => {
  return (
    <div className="flex items-center mb-4 bg-white rounded-xl overflow-hidden shadow-lg h-44">
      <div className="w-36 h-full overflow-hidden">
        <Skeleton
          variant="rectangular"
          animation="wave"
          style={{ height: "100%" }}
        />
      </div>
      <div className="flex flex-col gap-3 flex-1 py-3 px-5">
        <div className="flex items-center divide-x-2 divide-slate-400">
          <div className="pr-4">
            <Skeleton variant="text" width={50} sx={{ fontSize: "1rem" }} />
          </div>
          <div className="pl-4 flex-1">
            <div>
              <Skeleton
                variant="text"
                style={{width: "80%"}}
                sx={{ fontSize: "1.5rem" }}
              />
            </div>
            <div className="text-slate-500">
              <Skeleton variant="text" width={50} sx={{ fontSize: "1rem" }} />
            </div>
          </div>
        </div>
        <div>
          <Skeleton
            variant="text"
            style={{ width: "100%" }}
            sx={{ fontSize: "1rem" }}
          />
          <Skeleton
            variant="text"
            style={{ width: "100%" }}
            sx={{ fontSize: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GenreDetailSkeleton;
