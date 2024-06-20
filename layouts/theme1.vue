<template>
    <div class="theme1">
        <slot />
    </div>
</template>

<style>
/* Primary Button */
.theme1 .primary {
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    transition: all 0.2s;
}
.theme1 .primary:hover {
    background-color: #505050;
    color: #01c268;
    transform: translateX(5px);
}
.theme1 .primary img {
    filter: invert(1);
}

.theme1 .primary .scanner span::before {
    border-right: 4px solid #fff;
    color: #fff;
}

.theme1 .primary.disabled {
    background-color: #505050;
    color: #fff;
    cursor: not-allowed;
    opacity: 0.8;
}
.theme1 .primary.disabled:hover, .theme1 .primary.loading:hover {
    transform: none;
}

.theme1 .primary.loading:hover {
    background-color: #000;
}

/* Secondary Button */
.theme1 .secondary {
    background-color: #00924e;
    color: #000;
    border-radius: 10px;
    transition: all 0.2s;
}
.theme1 .secondary:hover {
    background-color: #00b25c;
    color: #fff;
    transform: translateX(5px);
}
.theme1 .secondary:hover img {
    filter: invert(1);
}

.theme1 .secondary.disabled {
    background-color: #00ac59b2;
    color: #000;
    cursor: not-allowed;
}

.theme1 .secondary.disabled:hover, .theme1 .secondary.loading:hover {
    transform: none;   
}

.theme1 .secondary.disabled:hover img {
    filter: none;
}

.theme1 .secondary.loading:hover {
    background-color: #00924e;
    color: #000;
}

/* Outlined Button */
.theme1 .outlined {
    color: #000;
    border-radius: 10px;
    transition: all 0.2s;
    border: 1px solid #000;
}
.theme1 .outlined:hover {
    color: #fff;
    background-color: #000;
    transform: translateX(5px);
}
.theme1 .outlined:hover img {
    filter: invert(1);
}

.theme1  .progress {
    background: #00924e;
}

.theme1 .outlined.disabled {
    border-color: #636363d0;
    color: #636363d0;
    cursor: not-allowed;
}

.theme1 .outlined.disabled:hover, .theme1 .outlined.loading:hover {
    transform: none;
    background-color: transparent;
}

.theme1 .outlined.disabled:hover img {
    filter: none;
}
</style>