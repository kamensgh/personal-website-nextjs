"use client"

import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";

const options = {
    background: {
        color: "#000"
    },
    particles: {
        color: { value: "#fff" },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce"
            },
            random: false,
            speed: 2,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: 3 }
        },
        links: {
            color: "#fff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
    }
};

export default function TsParticlesBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            options={options}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1
            }}
        />
    );
}
