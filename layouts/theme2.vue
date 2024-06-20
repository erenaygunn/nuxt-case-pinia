<template>
    <div class="theme2">
        <slot />
    </div>
</template>

<style>
.theme2 .primary {
    background-color: #6d6e00;
    color: #f9ffa6;
    transition: all 0.2s;
    padding: 16px 30px;
}
.theme2 .primary:hover {
    background-color: #8a8b00;
    color: #f9ffa6;
    transform: scale(1.05);
}

.theme2 .primary img {
    filter: invert(1);
}

.theme2 .primary .scanner span::before {
    border-right: 4px solid #f9ffa6;
    color: #f9ffa6;
}

.theme2 .primary.disabled {
    background-color: #8a8b00;
    color: #f9ffa6;
    cursor: not-allowed;
    opacity: 0.8;
}

.theme2 .primary.disabled:hover, .theme2 .primary.loading:hover {
    transform: none;
}

.theme2 .primary.loading:hover {
    background-color: #6d6e00;
}

/* Secondary Button */

.theme2 .secondary {
    position: relative;
    background-color: transparent;
    color: #000;
    transition: all 0.2s;
    padding: 16px 20px;
    border: 1px solid transparent;
}
.theme2 .secondary::after {
    background: #000;
    content: '';
    position: absolute;
    width: 75%;
    height: 1px;
    text-align: center;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.2s;
}
.theme2 .secondary:hover {
    transform: translateY(-2px);
}
.theme2 .secondary:hover::after {
    width: 5px;
    height: 5px;
    border-radius: 50%;
}

.theme2 .secondary.disabled {
    color: #636363d0;
    cursor: not-allowed;
}

.theme2 .secondary.disabled::after {
    background: #636363d0;
}

.theme2 .secondary.disabled:hover, .theme2 .secondary.loading:hover {
    transform: none;
}

.theme2 .secondary.loading:hover::after, .theme2 .secondary.disabled::after {
    width: 75%;
    height: 1px;
    border-radius: 0;
} 

/* Outlined Button */

.theme2 .outlined {
    color: #000;
    transition: all 0.3s;
    border: #6d6e00 1px solid;
}
.theme2 .outlined:hover {
    border-radius: 40px;
    transform: translateY(-2px);
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
}

.theme2 .progress {
    background: #6d6e00;
}

.theme2 .outlined.disabled {
    color: #636363d0;
    cursor: not-allowed;
    opacity: 0.8;
    border-color: #636363d0;
}

.theme2 .outlined.disabled:hover, .theme2 .outlined.loading:hover {
    transform: none;
    box-shadow: none;
    border-radius: unset;
}
</style>