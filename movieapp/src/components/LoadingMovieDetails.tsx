import React from "react";
import Skeleton from "@mui/material/Skeleton";

type Props = {};

const LoadingMovieDetails: React.FC = ({}: Props) => {
  return (
    <div className="w-full h-full">
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-10 p-6 rounded-xl"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <div className="w-80">
          <Skeleton variant="rounded" height={420} animation="wave" />
        </div>
        <div className="inline-flex flex-col flex-1 gap-2">
          <div>
            <Skeleton variant="text" width={350} sx={{ fontSize: "2rem" }} />
          </div>
          <div className="flex divide-x-2 divide-slate-400">
            <div className="pr-5">
              <Skeleton variant="rounded" width={60} height={20} />
            </div>
            <div className="px-5">
              <Skeleton variant="rounded" width={60} height={20} />
            </div>
            <div className="pl-5">
              <Skeleton variant="rounded" width={60} height={20} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Skeleton variant="text" width={300} sx={{ fontSize: "1rem" }} />
          </div>
          <div>
            <button
              className="text-white font-bold px-5 py-2 rounded-full bg-yellow-500"
              disabled={true}
            >
              Add to Favorite
            </button>
          </div>
          <div className="text-xl font-bold">Overview</div>
          <div className="inline-block">
            <Skeleton variant="text" sx={{ fontSize: "1.2rem" }} />
            <Skeleton variant="text" sx={{ fontSize: "1.2rem" }} />
            <Skeleton variant="text" sx={{ fontSize: "1.2rem" }} />
          </div>
          <div className="flex gap-10">
            <div>
              <div className="font-bold">
                <Skeleton
                  width={120}
                  variant="text"
                  sx={{ fontSize: "1.2rem" }}
                />
              </div>
              <div>Director</div>
            </div>
            <div>
              <div className="font-bold">
                <Skeleton
                  width={120}
                  variant="text"
                  sx={{ fontSize: "1.2rem" }}
                />
              </div>
              <div>Writer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6 gap-6 p-6 rounded-xl bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <div className="font-bold">Country</div>
            <div>
              <Skeleton
                width={120}
                variant="text"
                sx={{ fontSize: "1.2rem" }}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Language</div>
            <div>
              <Skeleton
                width={120}
                variant="text"
                sx={{ fontSize: "1.2rem" }}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Awards</div>
            <div>
              <Skeleton
                width={120}
                variant="text"
                sx={{ fontSize: "1.2rem" }}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Revenue</div>
            <div>
              <Skeleton
                width={120}
                variant="text"
                sx={{ fontSize: "1.2rem" }}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Metascore</div>
            <div>
              <Skeleton
                width={120}
                variant="text"
                sx={{ fontSize: "1.2rem" }}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">DVD</div>
            <div>
              <Skeleton
                width={120}
                variant="text"
                sx={{ fontSize: "1.2rem" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">Actors</div>
          <div className="flex mt-2">
            <Skeleton width={300} variant="text" sx={{ fontSize: "1.2rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingMovieDetails;
