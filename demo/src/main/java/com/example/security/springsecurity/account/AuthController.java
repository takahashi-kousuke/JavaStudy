package com.example.security.springsecurity.account;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

//問４－１ コントローラーを意味するアノテーションを記述
@Controller
public class AuthController {

    @Autowired
    private AccountRepository repository;//AccountRepositoryをインスタンス化 @Autowiredでnewを付けなくいてもインスタンス化できる

    public List<Account> get() {
        return (List<Account>) repository.findAll();//AccountRepositoryクラスのfindAllメソッドを呼び出してDBのデータを持ってくる
    }

    @RequestMapping("/")//トップページに行くやつ
    public String index() {
        return "redirect:/top";
    }

    @GetMapping("/login")//ログインページに飛ぶやつ
    public String login() {
        return "login";
    }

    @PostMapping("/login")//ログインボタン押して失敗したときに情報持ったままログイン失敗画面に移るやつ
    public String loginPost() {
        return "redirect:/login-error";
    }

    @GetMapping("/login-error")//ログインエラーをtrueにする工程
    public String loginError(Model model) {
        model.addAttribute("loginError", true);
        return "login";
    }

    @RequestMapping("/top")
    public String top() {
        return "/top";
    }

}